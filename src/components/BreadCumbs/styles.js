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
  
  &:after {
    position: absolute;
    width: 90%;
    content: " ";
    width: 100%;
    background-color: white;
    height: 12px;
    top: 30px;
    z-index: -2;
  }

  @media (max-width: 900px) {
    gap: .5rem;
  }
`;

