import styled from "styled-components";

export const Wrapper = styled.div`
  &.ps-logo {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.25rem;
    height: 100%;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    h1 {
      color: #ffffff;
      font-family: "Times New Roman";
      font-size: 1em;
      margin: 0;
      padding: 0;
      font-weight: normal;
      user-select: none;
    }
    .dots {
      display: flex;
      justify-content: flex-end;
    }

    .dot {
      width: 0.25em;
      height: 0.25em;
      border-radius: 50%;
      opacity: 1;
      animation: drops 2s linear infinite;
      margin-left: 0.16em;
      box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.15);
    }
  }
`;
