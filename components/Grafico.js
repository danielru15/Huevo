import React from 'react'
import { ArcElement, Tooltip, Legend } from 'chart.js';
import {
    Chart as ChartJS,
    defaults
  } from 'chart.js';
  import {
    Pie
  } from 'react-chartjs-2';

  ChartJS.register(ArcElement, Tooltip, Legend)
const Grafico = ({porcent_Tareas_Realizadas, porcent_Tareas_Pendientes}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '% Estado',
          },
        },
      };
      const data = {
        labels: ['Tareas Realizadas', 'Tareas pendientes'],
        datasets: [
          {
            label: '%',
            data: [porcent_Tareas_Realizadas, porcent_Tareas_Pendientes],
            backgroundColor: [
              'rgb(255, 203, 60)',
              'rgba(180, 14, 39)',
            ],
            borderColor: [
              'rgb(255, 203, 60)',
              'rgba(180, 14, 39)',
            ],
            borderWidth: 1,
          },
        ],
      }
  return (
    <Pie data={data} options={options}/>
  )
}

export default Grafico