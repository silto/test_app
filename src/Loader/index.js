import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.grey};

  > div {
    margin: 16px auto;
  }
`;

const Loader = ({ t, other }) => (
  <StyledLoader>
    <Spinner {...other} />
    <div>Loading</div>
  </StyledLoader>
);

export default Loader;
