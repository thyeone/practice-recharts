export type SearchValueType = typeof SEARCH_VALUE;
export type TimeUnitOptionsType = typeof TIME_UNIT_OPTIONS;

export const SEARCH_VALUE = [
  {
    id: 1,
    text: '카테고리:',
    placeholder: 'category',
  },
  {
    id: 2,
    text: '키워드:',
    placeholder: 'keyword',
  },
] as const;

export const TIME_UNIT_OPTIONS = [
  { label: 'date', value: 'date' },
  {
    label: 'week',
    value: 'week',
  },
  {
    label: 'month',
    value: 'month',
  },
];

export const AGES_OPTIONS = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '60', label: '60' },
];

export const GENDER_OPTIONS = [
  { value: 'm', label: 'm' },
  { value: 'f', label: 'f' },
];

export const DEVICE_OPTIONS = [
  { value: 'pc', label: 'pc' },
  { value: 'mo', label: 'mo' },
];
