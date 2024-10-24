import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import styled from "styled-components";

var options = {
  series: [
    {
      name: "series1",
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ],
  chart: {
    height: 120,
  },
  toolbar: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
};

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Wrapper>
    <div>
      <div style={{ width: "100%" }} id="chart" ref={chartRef}></div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    .apexcharts-toolbar{
        display:none;
    }
`
export default LineChart;
