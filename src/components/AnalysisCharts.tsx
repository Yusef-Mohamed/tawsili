"use client";

import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useTranslations } from "next-intl";

const AnalysisCharts = () => {
  const text = useTranslations("analysis");
  return (
    <Bar
      options={{
        plugins: {
          title: { display: false },
        },
      }}
      data={{
        labels: [
          text("saturday"),
          text("sunday"),
          text("monday"),
          text("tuesday"),
          text("wednesday"),
          text("thursday"),
          text("friday"),
        ],
        datasets: [
          {
            label: text("net_profit"),
            data: [30.7, 190, 300, 500, 200, 300, 450],
            backgroundColor: "#FF7A0052",
            hoverBackgroundColor: "#FF9330",
          },
        ],
      }}
    />
  );
};

export default AnalysisCharts;
