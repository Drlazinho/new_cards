import styled, { css } from "styled-components";
import amvox from "../../../../assets/amvox.png";

const linhaProducaoETransporte = css`
  content: "";
  position: absolute;
  width: 100%;
  top: 30%;
  left: 45%;
  height: 30%;
  z-index: 1;
`;

const linhaInspecao = css`
  content: "";
  position: absolute;
  width: 100%;
  transform: rotate(330deg);
  top: 100%;
  left: -55%;
  height: 15%;
  z-index: 11;
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-around;
  border-radius: 8px;
  gap: 2rem;
  width: 100%;

  /* LINE CARD */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    background-color: ${(props) => (props.checked ? "#25cf4a" : "#9e9e9e")};
    width: ${(props) => (props.horizontalStack ? "100%" : "50%")};
    top: ${(props) => (props.horizontalStack ? "1" : "60%")};
    left: ${(props) => (props.horizontalStack ? "20%" : "1")};
    height: ${(props) => (props.horizontalStack ? "40%" : "75%")};
    z-index: 1;
  }

  @media (max-width: 770px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: rotate(330deg);
      top: 100%;
      left: -55%;
      height: 15%;
      z-index: 1;
    }
  }
  @media (min-width: 1700px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 20%;
      top: 80%;
      left: 45%;
      height: 50%;
      z-index: 1;
    }
  }
`;

export const Content = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 6.25rem;
  padding: 1.5rem 1rem;
  background-image: url(${amvox});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-color: ${(props) => (props.checked ? "#000" : "#424242")};
  color: ${(props) => (props.checked ? "#00FF38" : "#555555")};
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.28);
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.28);
  z-index: 2;

  .line-div {
    background-color: ${(props) => (props.checked ? "#00FF38" : "#555555")};
    height: 5rem;
    width: 2px;
    opacity: 1;
  }

  .interativeUser {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      min-width: 20px;
      min-height: 20px;
    }
  }

  img {
    width: clamp(2.5rem, 25%, 7rem);
  }

  .descriptionBreadcrump {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    line-height: 1;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 1170px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1px;

    .line-div {
      background-color: ${(props) => (props.checked ? "#00FF38" : "#555555")};
      height: 2px;
      width: 70%;
      opacity: 1;
    }

    img {
      width: 2.5rem;
    }
  }

  @media (max-width: 770px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 500px) {
    color: ${(props) => (props.checked ? "#00FF38" : "#555555")};

    .interativeUser {
      gap: 0.5rem;
    }

    .descriptionBreadcrump {
      font-size: 1rem;
    }
  }
`;
