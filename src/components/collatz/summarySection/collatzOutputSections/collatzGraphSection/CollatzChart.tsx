import React from "react";

import { Line } from "react-chartjs-2";

interface ICollatzGraphProps {
  orbit: number[] | bigint[];
}

export default function CollatzChart(props: ICollatzGraphProps) {
  const { orbit } = props;

  const labels: string[] = [];
  for (let index = 0; index < orbit.length; index++) {
    const label: string = `${index}`;
    labels.push(label);
  }
  const data = orbit.map((step: number | bigint) => Number(step));

  const state = {
    labels,

    datasets: [
      {
        label: `${data[0]} Collatz sequence`,
        fill: false,
        lineTension: 0,
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
        data,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div
      style={{
        background: "white",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Line
        type={"Line"}
        data={state}
        options={{
          title: {
            display: false,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
