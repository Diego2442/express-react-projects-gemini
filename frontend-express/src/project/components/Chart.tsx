import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import { getChartAction } from '../actions/get-chart.action';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const Chart = () => {

    const {data: estados, isLoading} = useQuery({
        queryKey: ['chartSummary'],
        queryFn: getChartAction
    })

  const data = {
    labels: ['Progreso', 'Terminado'],
    datasets: [
      {
        label: 'Colores favoritos',
        data: [estados?.progreso, estados?.finalizado],
        backgroundColor: ['#0891B2', '#16A34A'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' as const },
      title: { display: true, text: 'Gráfico' },
    },
  };

  if(isLoading) return <p>Cargando...</p>

  return <Pie data={data} options={options} />;
};
