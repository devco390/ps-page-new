import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: whitesmoke;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .bo-login__form {
      background-color: #fff;
      height: 100%;
      width: 100%;
      padding: 2rem;
      @media (min-width: 768px) {
        height: 350px;
        width: 350px;
      }
      .bo-login__logo {
        padding: 2.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .ps-logo {
          h1 {
            color: ${theme.colors.darkColor};
          }
          .dot {
            box-shadow: 1px 1px 6px 0.5px rgba(0, 0, 0, 50%);
          }
        }
      }

      input {
        background-color: #f8f8f8;
        width: 100%;
        padding: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
        box-sizing: border-box;
        margin-bottom: 1.5rem;
      }
      ::placeholder {
        color: #bebebe;
      }
    }
  `}
`;
