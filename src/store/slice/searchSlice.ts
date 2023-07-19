import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RequestParams = {
  startDate: '',
  endDate: '',
  category: '50000000',
  keyword: '',
  timeUnit: '',
  device: '',
  gender: '',
  ages: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams: (state: RequestParams, action: PayloadAction<Partial<RequestParams>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSearchParams } = searchSlice.actions;

export default searchSlice.reducer;
