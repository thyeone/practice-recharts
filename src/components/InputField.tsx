import useCustomSelector from '@hooks/useCustomSelector';
import { setSearchParams } from '@store/slice/searchSlice';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

type searchValueProps = {
  text: string;
  placeholder: string;
};

const InputField = ({ text, placeholder }: searchValueProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { category, keyword } = useCustomSelector();

  useEffect(() => {
    if (keyword.length > 0 || category.length > 0) {
      setIsValidate(true);
    }
  }, [keyword, category]);

  return (
    <SearchValueItem>
      <SubTitle>{text}</SubTitle>
      <Input
        placeholder={placeholder}
        value={text.includes('카테고리') ? category : keyword}
        onFocus={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
        status={!isValidate && isClicked ? 'error' : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          text.includes('카테고리')
            ? dispatch(
                setSearchParams({
                  category: e.target.value,
                })
              )
            : dispatch(
                setSearchParams({
                  keyword: e.target.value,
                })
              )
        }
      />
      {!isValidate && isClicked && <WarningText>1글자 이상 입력해주세요.</WarningText>}
    </SearchValueItem>
  );
};

const SearchValueItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const SubTitle = styled.span`
  font-size: 12px;
  white-space: nowrap;
`;

const InputBox = styled.input`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid gray;
  padding-left: 10px;
`;

const WarningText = styled.span`
  color: #fc5a2f;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
`;

export default InputField;
