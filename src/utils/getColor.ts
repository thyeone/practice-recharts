const LINE_COLOR = {
  '10': '#46F45A',
  '20': '#52FFE9',
  '30': '#8A54FF',
  '40': '#FEB135',
  '50': '#FF664C',
  '60': '#FE85FD',
};

export const getColor = (group: AgesType): string => {
  return LINE_COLOR[group];
};
