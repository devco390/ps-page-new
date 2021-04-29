import styled from "styled-components";

export const Wrapper = styled.header`
  height: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  .header-logo {
    height: 100%;
    width: auto;
    display: inline-block;
    cursor: pointer;
  }
`;
