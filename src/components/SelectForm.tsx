import { styled } from 'styled-components';

import SelectField from '@components/SelectField';

const SelectForm = () => {
  return (
    <SelectBar>
      <Require>*</Require>
      <SelectField />
    </SelectBar>
  );
};

const SelectBar = styled.div`
  display: flex;
  column-gap: 30px;
`;

const Require = styled.span`
  color: red;
  margin-right: -20px;
`;

export default SelectForm;
