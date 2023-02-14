import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: ${(props) => (props.horizontalStack ? "row" : "column")};
  align-items: center;
  position: relative;
  justify-content: space-around;
  border-radius: 8px;
  gap: 2rem;
  width: 100%;

  @media (max-width: 900px) {
    gap: 0.5rem;
  }

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 770px) {
    flex-direction: ${(props) => (props.breadToInpecao ? "row" : "row")};
  }

  @media (min-width: 1700px) {
    flex-direction: ${(props) => (props.horizontalStack ? "column" : "row")};
  }
`;
