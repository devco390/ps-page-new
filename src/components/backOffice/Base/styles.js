import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

export const Sidebar = styled.div`
  background: #ffffff;
  box-shadow: inset 0 2px 12px -8px rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 48px;
  transform: translate3d(-300px, 0, 0);
  transition: transform 0.5s;
  z-index: 1020;
  &.open {
    transform: translate3d(0, 0, 0);
  }
`;

export const Nav = styled.nav``;

export const WrapperLogo = styled.div`
  > div {
    padding: 0;
  }
`;

export const Header = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgb(48 48 48 / 15%);
  display: flex;
  min-height: 48px;
  width: 100%;
  z-index: 1020;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const IconHamburger = styled.a`
  box-sizing: content-box;
  cursor: pointer;
  display: inline-block;
  padding: 0 16px;
  vertical-align: middle;
  width: 18px;

  i {
    background-color: #5d5d66;
    border-radius: 2px;
    content: "";
    display: block;
    height: 3px;
    width: 100%;

    &:nth-child(2) {
      margin: 2px 0;
    }
  }

  &.close {
    i:nth-child(1) {
      animation: outT 0.8s backwards;
      animation-direction: reverse;
    }

    i:nth-child(2) {
      animation: outM 0.8s backwards;
      animation-direction: reverse;
    }

    i:nth-child(3) {
      animation: outBtm 0.8s backwards;
      animation-direction: reverse;
    }
  }

  &.open {
    i:nth-child(1) {
      animation: inT 0.8s forwards;
    }

    i:nth-child(2) {
      animation: inM 0.8s forwards;
    }

    i:nth-child(3) {
      animation: inBtm 0.8s forwards;
    }
  }

  @keyframes inM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes outM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes inT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(5px) rotate(0deg);
    }
    100% {
      transform: translateY(5px) rotate(135deg);
    }
  }

  @keyframes outT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(5px) rotate(0deg);
    }
    100% {
      transform: translateY(5px) rotate(135deg);
    }
  }

  @keyframes inBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(0deg);
    }
    100% {
      transform: translateY(-5px) rotate(135deg);
    }
  }

  @keyframes outBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(0deg);
    }
    100% {
      transform: translateY(-5px) rotate(135deg);
    }
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Content = styled.div`
  background-color: #ccc;
`;
export const LogoutWrapper = styled.div`
  padding-right: 1rem;
`;
