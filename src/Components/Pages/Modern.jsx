import React,{useEffect,useRef} from "react";
import Card from "../Modern/Card";
import CardData from "../../Data/ModernData";
import "../Modern/Modern.css";
import ApexCharts from 'apexcharts' 
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

const Modern = () => {
  const chartRef = useRef(null); // Ref for the chart container

  useEffect(() => {
    // Initialize the ApexChart after the component mounts
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Cleanup the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div className="mainDiv">
      <div className="row">
        {CardData.map((val, i) => {
          return (
            <div className="col-2" key={i}>
              <Card cardData={val} />
            </div>
          );
        })} 
      </div>
      <div style={{width:"50%",margin:"20px 0px"}} id="chart" ref={chartRef}></div>
    </div>
  );
};

export default Modern;
