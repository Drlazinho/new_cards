import styled from "styled-components";
import amvox from "../../../../assets/amvox.png";

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
    width: 80%;
    background-color: ${(props) => (props.checked ? "#25cf4a" : "#ffffff")};
    height: 1.3rem;
    left: 8rem;
    z-index: 1;
  }

  @media (max-width: 900px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 80%;
      height: 1.3rem;
      left: 5rem;
      z-index: 1;
    }
  }

  @media (max-width: 500px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 10%;
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
  padding: 1rem;
  background-image: url(${amvox});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-color: black;
  color: ${(props) => (props.checked ? "#00FF38" : "#555555")};
  width: 100%;
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
    height: 100px;
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
    width: 4rem;
  }

  .descriptionBreadcrump {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    line-height: 0.5;
    gap: 0.5rem;
    justify-content: center;
    white-space: nowrap;
  }

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
    padding: 0.5rem;

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

  @media (max-width: 500px) {
    background-image: none;
    padding: 0.5rem 0;
    color: ${(props) => (props.checked ? "#00FF38" : "#555555")};

    .interativeUser {
      gap: 0.5rem;
      flex-direction: column;
    }

    .descriptionBreadcrump {
      font-size: 1rem;
    }
  }
`;
