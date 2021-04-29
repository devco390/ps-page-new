import styled from "styled-components";

export const Wrapper = styled.button`
  align-content: space-between;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 800;
  transition: opacity 0.3s ease;
  user-select: none;
  height: 48px;
  border-radius: 5px;
  border: none;
  background-color: #dd4b39;
  color: white;
  outline: none;
  padding: 0;
  cursor: pointer;
  width: 100%;

  &[disabled] {
    pointer-events: none;
    opacity: 0.6;
  }

  & > svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.7;
  }

  span {
    height: 100%;
    width: 40px;
    background-color: #ad3b2d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }
  label {
    flex: 1 1 auto;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
