import React from "react";

import { Line } from "react-chartjs-2";

import IStyles from "@/types/interfaces/IStyles";
import step from "@/types/unions/step";
import orbit from "@/types/unions/orbit";

interface IOrbitChartInfo {
  labels: string[];
  data: number[];
}

interface ICollatzGraphProps {
  orbit: orbit;
}

const styles: IStyles = {
  chart_container: {
    background: "white",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
};

const DATASET_STYLE = {
  fill: false,
  lineTension: 0,
  backgroundColor: "red",
  borderColor: "red",
  borderWidth: 2,
  pointRadius: 0,
} as const;

const CHART_OPTIONS = {
  title: {
    display: false,
  },
  legend: {
    display: true,
    position: "right",
  },
} as const;

function getOrbitChartInfo(orbit: orbit): IOrbitChartInfo {
  const labels: string[] = [];
  const data: number[] = [];
  for (let index = 0; index < orbit.length; index++) {
    const step: step = orbit[index];
    const label: string = `${index}`;
    const datum: number = Number(step);
    labels.push(label);
    data.push(datum);
  }
  return { labels, data };
}

function CollatzChart(props: ICollatzGraphProps): JSX.Element {
  const { orbit } = props;
  const { labels, data }: IOrbitChartInfo = getOrbitChartInfo(orbit);
  const label: string = `${data[0]} Collatz sequence`;

  const chartData = {
    labels,
    datasets: [{ label, data, ...DATASET_STYLE }],
  };

  return (
    <div style={styles.chart_container}>
      <Line type={"Line"} data={chartData} options={CHART_OPTIONS} />
    </div>
  );
}

export default CollatzChart;
