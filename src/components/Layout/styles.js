import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    &.ps-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      .ps-container__wrapper {
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.whiteColor};
        border-radius: 4px;
        height: 100%;
        .ps-header {
          background-color: ${theme.colors.darkColor};
        }
        .ps-banner {
          background-color: ${theme.colors.darkCyanTwo};
          background-color: ${theme.colors.darkCyan};
        }
        .ps-main__container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          flex: 1 1 auto;
          overflow: auto;
        }
      }

      .image {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-size: contain;
      }
    }
  `}
`;
