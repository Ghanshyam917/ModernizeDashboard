import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  return (
    <Wrapper>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width={130}
            />
          </div>
        </div>

        <div className="actions"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .apx-legend-position-right {
    display: none;
  }
`;

export default PieChart;
