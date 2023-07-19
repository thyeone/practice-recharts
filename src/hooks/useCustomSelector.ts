import { RootState } from '@store/store';
import { useSelector } from 'react-redux';

const useCustomSelector = () => {
  const startDate = useSelector((state: RootState) => state.searchSlice.startDate);
  const endDate = useSelector((state: RootState) => state.searchSlice.endDate);
  const category = useSelector((state: RootState) => state.searchSlice.category);
  const ages = useSelector((state: RootState) => state.searchSlice.ages);
  const gender = useSelector((state: RootState) => state.searchSlice.gender);
  const timeUnit = useSelector((state: RootState) => state.searchSlice.timeUnit);
  const keyword = useSelector((state: RootState) => state.searchSlice.keyword);
  const device = useSelector((state: RootState) => state.searchSlice.device);

  return { startDate, endDate, category, ages, gender, timeUnit, keyword, device };
};

export default useCustomSelector;
