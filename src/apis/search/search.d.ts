type SearchResultDataType = {
  period: string;
  group: string;
  ratio: number;
};

// type SearchData = {
//   startDate: string;
//   endDate: string;
//   timeUnit: string;
//   results: [
//     {
//       title: string;
//       keyword: string[];
//       data: SearchResultDataType[];
//     }
//   ];
// };

type Search = {
  data: {
    startDate: string;
    endDate: string;
    timeUnit: string;
    results: [
      {
        title: string;
        keyword: string[];
        data: SearchResultDataType[];
      }
    ];
  };
};
