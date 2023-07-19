import instance from '@apis/instance';

const searchApi = {
  postSearchByKeywordAge: async (params: RequestParams): Promise<Search> => {
    return instance.post(`/keyword/age`, params);
  },
};

export default searchApi;
