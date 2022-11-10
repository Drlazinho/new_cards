import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-around;
  border-radius: 8px;
  gap: 2rem;
  width: 90%;

  .bgcolor{
    background-color: ${(props) => props.cardColor || 'rgb(255, 255, 255)'};  
    color: ${(props) => props.cardColor || 'black'};
    width: 100%;
  }

  &:after {
    position: absolute;
    width: 90%;
    content: " ";
    width: 100%;
    background-color: white;
    height: 8px;
    top: 23px;
    z-index: -2;
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  width: 100%;
  background-color: ${(props) => props.checked ? '#189433' : '#ffffff' };  
  color: ${(props) => props.checked ? '#ffffff' : '#000000'};  
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  justify-content: flex-start;

  input {
    min-width: 15px;
    min-height: 15px;  
  }  

  .descriptionBreadcrump {
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: center;
  }

`;
