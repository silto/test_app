import styled from "styled-components";

const Container = styled.div`
  ${'' /* max-width: 800px; */}
  min-height: calc(100vh - 256px);
  margin: 0 auto;
  box-sizing: border-box;
  height: auto;
  padding: 32px;
  border: ${({ theme }) => `1px solid ${theme.containerBorder}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => `${theme.containerShadow}12 0px 5px 10px, ${theme.black}0d 0px 5px 5px`};
  background: ${({ theme }) => theme.white};

  @media (max-width: 600px) {
    padding: 16px;
  }

`;

export default Container;
