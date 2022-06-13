import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

type Props = {
  data: any;
  handleClickOpen: any;
};

const createData = (props: Props) => {
  const { data } = props;
  const { id, dividends } = data;
  return {
    labels: dividends.map(({ year }) => year),
    datasets: [
      {
        label: id,
        data: dividends.map(({ value }) => value),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
};

export function Charts(props: Object) {
  return <Bar options={options} data={createData(props)} />;
}
