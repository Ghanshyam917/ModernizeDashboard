import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { cardData } = props;
  return (
    <Wrapper>
      <div className="carddiv" style={{ backgroundColor: `${cardData.bgClr}`,border:`1px solid ${cardData.color}` }}>
        <div className="image">
          <img src={cardData.image} alt="" />
        </div>
        <div className="name" style={{ color: `${cardData.color}` }}>
          {cardData.name}
        </div>
        <div className="count" style={{ color: `${cardData.color}` }}>
          {cardData.count}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .carddiv {
    padding: 24px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 10px;
  }
  .name {
    margin-top: 10px;
    margin-bottom: 2px;
    font-weight: bold;
  }
  .count {
    font-weight: bold;
  }
`;

export default Card;
