import React from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import { PiCurrencyDollarSimpleDuotone } from "react-icons/pi";
import LineChart from "./LineChart";

const BoxCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Wrapper>
      <div className="row">
        <div className="col-7">
          <div className="head">
            <h5>{data.heading}</h5>
          </div>
          <div className="price">{data.price}</div>
          <div className="calcData">
            <div
              className="arrow"
              style={{ backgroundColor: data.backClr, color: data.color }}
            >
              {data.icon}
            </div>
            <span className="perc">{data.percentage}</span>
            <span>last year</span>
          </div>
        </div>
        {data.formate === "Yearly" && (
          <div className="col-5 d-flex justify-content-center">
            <PieChart />
          </div>
        )}
        {data.formate === "Monthly" && (
          <div className="col-5 d-flex justify-content-center">
            <div className="monthly">
              <PiCurrencyDollarSimpleDuotone />
            </div>
          </div>
        )}
        {data.formate === "Yearly" && (
          <div className="col-12 yeardiv">
            <ul>
              <li>2025</li>
              <li>2024</li>
            </ul>
          </div>
        )}
        {data.formate === "Monthly" && (
          <div className="col-12 Monthdiv">
            <LineChart />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .price {
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
  }
  .head h5 {
    font-weight: 600;
    font-size: 18px;
  }
  .arrow {
    padding: 6px;
    background: aliceblue;
    border-radius: 30px;
    font-size: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .perc {
    font-weight: 600;
    padding: 0px 10px;
  }
  .calcData {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    font-size: 15px;
  }
  ul {
    display: flex;
    gap: 35px;
    margin: 0;
    font-size: 15px;
  }
  .monthly {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px;
    background: rgb(73, 190, 255);
    border-radius: 50%;
    height: 55px;
    width: 55px;
  }
  .monthly svg {
    color: white;
    font-size: 25px;
  }
  .Monthdiv {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default BoxCard;
