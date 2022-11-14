import styled from "styled-components";

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
    background-color: ${(props) => props.checked ? '#25cf4a' : '#ffffff' };
    height: 1.3rem;
    left: 8rem;
    z-index: 1;
  }

  @media (max-width: 900px) {
  
    &:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 80%;
    /* background-color: ${(props) => props.checked ? '#25cf4a' : '#ffffff' }; */
    height: 1.3rem;
    left: 5rem;
    z-index: 1;
  }
  }

`;

export const Content = styled.div`
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.checked ? '#25cf4a' : '#ffffff' };  
  color: ${(props) => props.checked ? '#ffffff' : '#000000'};  
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  z-index: 2;

  .interativeUser{
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
    min-width: 20px;
    min-height: 20px;  
  }  

  }

  img{
    width: 4rem;
  }


  .descriptionBreadcrump {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    line-height: .5;
    gap: .5rem;
    justify-content: center;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
    padding: .5rem;

    img{
      width: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: .5rem 0;

    .interativeUser{
      gap:.5rem;
      flex-direction: column;
    }
  }

`;
