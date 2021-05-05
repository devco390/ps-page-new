import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: Helvetica;
  position: fixed;
  z-index: 4000;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  .ps-loading__loader {
    height: auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    .ps-loading__loader__dots {
      height: 20px;
    }

    .ps-loading__loader__dot {
      animation-name: loader;
      animation-timing-function: ease-in-out;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      background-color: black;
      position: absolute;
      border: 2px solid white;

      &:first-child {
        background-color: cyan;
        animation-delay: 0.5s;
      }

      &:nth-child(2) {
        background-color: yellow;
        animation-delay: 0.4s;
      }

      &:nth-child(3) {
        background-color: magenta;
        animation-delay: 0.3s;
      }
    }

    .ps-loading__loader__text {
      width: 100%;
      padding-top: 1rem;
      font-weight: bold;
      text-align: center;
      &:after {
        content: "";
        position: absolute;
        font-weight: bold;
        animation-name: loading-text;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }

  @keyframes loader {
    15% {
      transform: translateX(0);
    }

    45% {
      transform: translateX(230px);
    }

    65% {
      transform: translateX(230px);
    }

    95% {
      transform: translateX(0);
    }
  }

  @keyframes loading-text {
    0% {
      content: "";
    }

    25% {
      content: ".";
    }

    50% {
      content: "..";
    }

    75% {
      content: "...";
    }
  }
`;
