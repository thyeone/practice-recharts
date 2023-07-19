import { getColor } from '@utils/getColor';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }: { data: SearchResultDataType[] }) => {
  const groups = data.map((v) => v.group);
  const filteredGroups = groups.filter((v, idx) => groups.indexOf(v) === idx);

  return (
    <ResponsiveContainer width='100%' minHeight='500px'>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='period' />
        <YAxis />
        <Tooltip />
        <Legend layout='horizontal' verticalAlign='top' align='center' height={50} iconType='rect' iconSize={20} />
        {filteredGroups.map((v) => (
          <>
            <Line key={v} type='monotone' dataKey='ratio' stroke={getColor(v as AgesType)} name={v} />
          </>
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
