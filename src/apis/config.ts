export const CONFIG = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_KEYS: {
    NAVER_CLIENT_ID: process.env.REACT_APP_NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET: process.env.REACT_APP_NAVER_CLIENT_SECRET,
  },
} as const;
