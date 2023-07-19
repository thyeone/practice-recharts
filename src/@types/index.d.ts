type timeUnitType = '' | 'date' | 'week' | 'month';
type GenderType = '' | 'm' | 'f';
type AgesType = '10' | '20' | '30' | '40' | '50' | '60';
type deviceType = '' | 'pc' | 'mo';

type RequiredParams = {
  startDate: string;
  endDate: string;
  timeUnit: timeUnitType;
  category: string;
  keyword: string;
};

type NonRequiredParams = {
  device?: deviceType;
  gender?: GenderType;
  ages?: AgesType[];
};

type RequestParams = RequiredParams & NonRequiredParams;
