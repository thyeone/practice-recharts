import { SEARCH_VALUE } from '@constants/searchValue';
import { styled } from 'styled-components';
import { DatePicker } from 'antd';
import SelectForm from '@components/SelectForm';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import searchApi from '@apis/search/searchApi';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import InputField from '@components/InputField';
import { setSearchParams } from '@store/slice/searchSlice';
import useCustomSelector from '@hooks/useCustomSelector';
import Chart from '@components/Chart';

const Search = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state: RootState) => state.searchSlice);
  const { startDate, endDate } = useCustomSelector();
  const [data, setData] = useState<SearchResultDataType[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleStartDate = (_: any, dateString: string) => {
    dispatch(
      setSearchParams({
        startDate: dateString,
      })
    );
  };

  const handleEndDate = (_: any, dateString: string) => {
    dispatch(
      setSearchParams({
        endDate: dateString,
      })
    );
  };

  const handleSubmit = async () => {
    const res = await searchApi.postSearchByKeywordAge(params).then((res) => res.data.results);
    const result = res.map((v) => v.data).flatMap((subArary) => subArary);
    setData(result as SearchResultDataType[]);
  };

  useEffect(() => {
    setIsValid(
      Object.values(params)
        .slice(0, 5)
        .every((value) => value.length > 0)
    );
  }, [params]);

  return (
    <PageLayout>
      <InputKeywordBar>
        <DatePicker
          value={startDate ? dayjs(startDate) : null}
          placeholder='startDate'
          onChange={handleStartDate}
          status={startDate > endDate ? 'error' : ''}
        />
        <DatePicker
          value={endDate ? dayjs(endDate) : null}
          placeholder='endDate'
          onChange={handleEndDate}
          status={endDate < startDate ? 'error' : ''}
        />
        {SEARCH_VALUE.map(({ id, text, placeholder }) => (
          <InputField key={id} text={text} placeholder={placeholder} />
        ))}
      </InputKeywordBar>
      <SelectField>
        <SelectForm />
        {isValid ? (
          <Inquiry isValid={isValid} onClick={handleSubmit}>
            조회
          </Inquiry>
        ) : (
          <Inquiry isValid={isValid}>조회</Inquiry>
        )}
      </SelectField>
      <Chart data={data as SearchResultDataType[]} />
    </PageLayout>
  );
};

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const InputKeywordBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  column-gap: 30px;
`;

const Inquiry = styled.button<{ isValid: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${(props) => (props.isValid ? '#0ea5e9' : 'gray')};
  width: 60px;
  height: 35px;
  border-radius: 7px;
  cursor: pointer;
`;

const SelectField = styled.div`
  display: flex;
  column-gap: 20px;
`;

export default Search;
