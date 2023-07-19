import axios from 'axios';
import { CONFIG } from '@apis/config';

const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    'X-Naver-Client-Id': CONFIG.API_KEYS.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': CONFIG.API_KEYS.NAVER_CLIENT_SECRET,
  },
});

export default instance;
