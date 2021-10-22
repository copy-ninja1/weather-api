import styled from "styled-components";

const Current = {
  Box: styled.div`
    display: flex;
    text-algin: center;
    font-size: 18px;
    font-weight: 600;
    color: #d1d1d1;
    margin: 0 auto;
    width: fit-content;
    align-items: center;
  `,
  Temp: styled.div`
    font-size: 100px;
    font-weight: 100;
    color: #363636;
  `,
  Icon: styled.img`
    height: 60px;
    width: 70px;
    margin-right: 30px;
  `,
};
export default Current;
