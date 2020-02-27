import React, { useEffect, useMemo, useRef } from "react";
import { Chart } from "chart.js";
import { useSelector } from "react-redux";
import { metronic } from "../../_metronic";
import './charts.scss';
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function OrderStatisticsChart() {
  const ref = useRef();

  const data = useMemo(
    () => ({
      labels: ["Negative", "Neutral", "Positive", "Very Positive"],
      datasets: [
        {
          data: [],
          backgroundColor: [
            '#EE750A',
            '#FFE40C',
            '#AACC0D',
            '#00A30A',
          ],
        },
      ],
    })
  );

  useEffect(() => {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(ref.current, {
      data,
      type: "pie",
      backgroundColor: [
        '#000',
        'orange',
        'yellow',
        'green',
        'blue',
      ],
      plugins: [ChartDataLabels],
      options: {
        responsive: true,
        legend: {
          position: 'right'
        },
        plugins: {
          datalabels: {
            color: '#fff',
            align: 'center',
            offset: 200,
            textShadowColor: 'black',
            textShadowBlur: 5,
            formatter: function(value, context) {
              return value + '%';
            }
          }
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data, f) {
              const index = tooltipItems.index;
              return  `${data.labels[index]}: ${data.datasets[0].data[index]}%`;
            }
          },
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  });

  return (
    <div className="kt-widget12">
      <div className="kt-widget12__chart" style={{ height: "350px" }}>
        <canvas
          ref={ref}
          width={483}
          id="kt_chart_order_statistics"
        />
      </div>
    </div>
  );
}
