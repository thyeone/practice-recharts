export type TimeUnitOptionsProps = {
  id: number;
  option: string;
  params: string;
  value: timeUnitType | AgesType[] | deviceType | GenderType;
};

const OptionBox = ({ option, value }: Pick<TimeUnitOptionsProps, 'option' | 'value'>) => {
  return (
    <>
      <option value={value ?? null}>{option}</option>
    </>
  );
};

export default OptionBox;
