import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { Chart } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { metronic } from "../../_metronic";

Chart.plugins.unregister(ChartDataLabels);

export default function SalesBarChart({ title, desc }) {
  const ref = useRef();
  const { successColor } = useSelector(state => ({
    successColor: metronic.builder.selectors.getConfig(
      state,
      "colors.state.brand"
    )
  }));

  const data = useMemo(
    () => ({
      labels: [

      ],
      datasets: [
        {
          // label: 'dataset 1',
          data: [],
          backgroundColor: Chart.helpers
            .color(successColor)
            .alpha(0.6)
            .rgbString(),
        },
      ]
    }),
    [successColor]
  );

  useEffect(() => {
    const chart = new Chart(ref.current, {
      data,
      type: "bar",
      plugins: [ChartDataLabels],
      options: {
        title: { display: false },
        plugins: {
          datalabels: {
            color: '#fff',
            align: 'center',
          }
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [{ display: true, gridLines: true, stacked: true,
            ticks: {
              max: 70,
              stepSize: 10,
              display: true,
              beginAtZero: true,
              fontSize: 13,
              padding: 10
            }}],
          yAxes: [
            {
              display: true,
              stacked: true,
              gridLines: {
                offsetGridLines: true
              }
            }]
        },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="kt-widget14">
      <div className="kt-widget14__chart" style={{ height: "250px" }}>
        <canvas ref={ref} />
      </div>
    </div>
  );
}
