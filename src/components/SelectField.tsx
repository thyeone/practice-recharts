import { AGES_OPTIONS, DEVICE_OPTIONS, GENDER_OPTIONS, TIME_UNIT_OPTIONS } from '@constants/searchValue';
import useCustomSelector from '@hooks/useCustomSelector';
import { setSearchParams } from '@store/slice/searchSlice';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

const SelectField = () => {
  const { timeUnit, ages, gender, device } = useCustomSelector();
  const dispatch = useDispatch();
  return (
    <SelectBoxContainer>
      <Select
        placeholder='timeUnit'
        value={timeUnit !== '' ? timeUnit : null}
        options={TIME_UNIT_OPTIONS}
        onChange={(option) =>
          dispatch(
            setSearchParams({
              timeUnit: option as timeUnitType,
            })
          )
        }
        style={{ width: '100px' }}
      />
      <Select
        mode='multiple'
        placeholder='모든 연령'
        value={ages}
        options={AGES_OPTIONS}
        onChange={(option) =>
          dispatch(
            setSearchParams({
              ages: option as AgesType[],
            })
          )
        }
        style={{ width: '100px' }}
      />
      <Select
        placeholder='gender'
        value={gender !== '' ? gender : null}
        options={GENDER_OPTIONS}
        onChange={(option) =>
          dispatch(
            setSearchParams({
              gender: option as GenderType,
            })
          )
        }
      />
      <Select
        placeholder='device'
        value={device !== '' ? device : null}
        options={DEVICE_OPTIONS}
        onChange={(option) =>
          dispatch(
            setSearchParams({
              device: option as deviceType,
            })
          )
        }
      />
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export default SelectField;
