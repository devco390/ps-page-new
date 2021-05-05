import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    .call-to-action {
      padding: 0.5rem 0 0.5rem 0.5rem;
      height: 60px;
      cursor: pointer;
      background: transparent;
      border: 1px solid;
      color: transparent;
      outline: none;
      transition: 1s ease-in-out;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      border-radius: 5px;
      z-index: 60;

      .call-to-action__circle {
        color: #ffffff;
        position: relative;
        justify-content: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0.5rem;
        border-radius: 50%;

        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      }
      .call-to-action__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        color: ${theme.colors.blackText};
        text-align: center;
        padding-left: 8px;
        border-radius: 16px;
        padding: 10px 15px;
        box-shadow: 0 2px 8px 1px rgba(48, 48, 48, 0.15);
        background-color: #fafafa;
        .call-to-action__text--label {
          white-space: nowrap;
        }
      }
    }

    // phone animation

    .Phone {
      position: relative;
      display: block;
      margin: 0;
      width: 1em;
      height: 1em;
      font-size: 40px;
      background-color: ${theme.colors.darkCyan};
      border-radius: 0.5em;
      box-shadow: 0 0 0 0em rgba(0, 139, 139, 0),
        0em 0.05em 0.1em rgba(0, 0, 0, 0.2);
      transform: translate3d(0, 0, 0) scale(1);

      &.icon-whatsapp {
        background-color: ${theme.colors.whatsappColor};
        box-shadow: 0 0 0 0em rgba(0, 139, 139, 0),
          0em 0.05em 0.1em rgba(0, 0, 0, 0.2);
      }
    }

    .Phone::before,
    .Phone::after {
      position: absolute;
      content: "";
    }

    .Phone::before {
      top: 0;
      left: 0;
      width: 1em;
      height: 1em;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 100%;
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(0);
    }

    .Phone::after {
      top: 0.25em;
      left: 0.25em;
      width: 0.5em;
      height: 0.5em;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYuNiAxMC44YzEuNCAyLjggMy44IDUuMSA2LjYgNi42bDIuMi0yLjJjLjMtLjMuNy0uNCAxLS4yIDEuMS40IDIuMy42IDMuNi42LjUgMCAxIC40IDEgMVYyMGMwIC41LS41IDEtMSAxLTkuNCAwLTE3LTcuNi0xNy0xNyAwLS42LjQtMSAxLTFoMy41Yy41IDAgMSAuNCAxIDEgMCAxLjIuMiAyLjUuNiAzLjYuMS40IDAgLjctLjIgMWwtMi4zIDIuMnoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      transform: translate3d(0, 0, 0);
    }

    .Phone.icon-whatsapp::after {
      background: url("/whatsapp.svg") no-repeat;
    }

    .Phone.is-animating {
      animation: phone-outer 3000ms infinite;

      &::before {
        animation: phone-inner 3000ms infinite;
      }

      &::after {
        animation: phone-icon 3000ms infinite;
      }
    }

    @keyframes phone-outer {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
        box-shadow: 0 0 0 0em rgba(0, 0, 0, 0),
          0em 0.05em 0.1em rgba(0, 0, 0, 0.2);
      }
      33.3333% {
        transform: translate3d(0, 0, 0) scale(1.1);
        box-shadow: 0 0 0 0em rgba(0, 0, 0, 0.1),
          0em 0.05em 0.1em rgba(0, 0, 0, 0.5);
      }
      66.6666% {
        transform: translate3d(0, 0, 0) scale(1);
        box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0),
          0em 0.05em 0.1em rgba(0, 0, 0, 0.2);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(1);
        box-shadow: 0 0 0 0em rgba(0, 0, 0, 0),
          0em 0.05em 0.1em rgba(0, 0, 0, 0.2);
      }
    }

    @keyframes phone-inner {
      0% {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(0);
      }
      33.3333% {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(0.9);
      }
      66.6666% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0);
      }
      100% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0);
      }
    }

    @keyframes phone-icon {
      0% {
        transform: translate3d(0em, 0, 0);
      }
      2% {
        transform: translate3d(0.01em, 0, 0);
      }
      4% {
        transform: translate3d(-0.01em, 0, 0);
      }
      6% {
        transform: translate3d(0.01em, 0, 0);
      }
      8% {
        transform: translate3d(-0.01em, 0, 0);
      }
      10% {
        transform: translate3d(0.01em, 0, 0);
      }
      12% {
        transform: translate3d(-0.01em, 0, 0);
      }
      14% {
        transform: translate3d(0.01em, 0, 0);
      }
      16% {
        transform: translate3d(-0.01em, 0, 0);
      }
      18% {
        transform: translate3d(0.01em, 0, 0);
      }
      20% {
        transform: translate3d(-0.01em, 0, 0);
      }
      22% {
        transform: translate3d(0.01em, 0, 0);
      }
      24% {
        transform: translate3d(-0.01em, 0, 0);
      }
      26% {
        transform: translate3d(0.01em, 0, 0);
      }
      28% {
        transform: translate3d(-0.01em, 0, 0);
      }
      30% {
        transform: translate3d(0.01em, 0, 0);
      }
      32% {
        transform: translate3d(-0.01em, 0, 0);
      }
      34% {
        transform: translate3d(0.01em, 0, 0);
      }
      36% {
        transform: translate3d(-0.01em, 0, 0);
      }
      38% {
        transform: translate3d(0.01em, 0, 0);
      }
      40% {
        transform: translate3d(-0.01em, 0, 0);
      }
      42% {
        transform: translate3d(0.01em, 0, 0);
      }
      44% {
        transform: translate3d(-0.01em, 0, 0);
      }
      46% {
        transform: translate3d(0em, 0, 0);
      }
    }
  `}
`;
