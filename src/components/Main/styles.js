import styled, { css } from "styled-components";

const buttonWidth = "144px";
const buttonHeight = "48px";
const buttonFontSize = "12px";

const frillVertSpace = "45px";
const frillHorizontalOffset = "14px";
const frillDistance = "80px";
const frillStagger = "15px";

const frillRotation = "34deg";
const frillHeight = "8px";
const frillWidth = "38px";

const speed = "0.38s";
const timingFunction = "ease-out";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    &.ps-main {
      background-color: transparent;
      width: 100%;
      height: 100%;
      position: relative;

      .ps-main__sections {
        max-width: 1152px;
        margin: auto;
      }
      .ps-main__wrapper-image-title {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 48px);
        min-height: 100%;
        @media (min-width: 768px) {
          flex-direction: row-reverse;
        }
      }

      .ps-main__image {
        width: 100%;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn ease 1s;
        @media (min-width: 768px) {
          height: 320px;
          width: 320px;
          min-width: 320px;
        }
        img {
          width: auto;
          height: 100%;
          object-fit: fill;
        }
      }

      h2 {
        font-size: 24px;
        margin: 10px 0px 20px;
        color: ${theme.colors.darkCyanTwo};
        text-align: center;
      }

      .ps-main__gallery {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        align-items: center;
        width: 100%;
      }

      .ps-main__who {
        display: flex;
        padding: 1rem 40px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        p {
          padding: 0;
          margin: 0;
          text-align: center;
          color: ${theme.colors.blackText};
          font-size: 20px;
          line-height: 1.5;
          max-width: 480px;
        }
      }

      .ps-main__data {
        color: #ffffff;
        position: relative;
        padding: 2rem 40px;

        .ps-main__data--info {
          color: ${theme.colors.darkColor};
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          position: relative;
          box-sizing: border-box;
          font-size: 12px;
          width: 100%;
          height: auto;
          padding: 16px 16px 16px 16px;
          @media (min-width: 768px) {
            width: 60%;
            max-width: 60%;
          }
        }

        .icon {
          display: inline-block;
          width: 14px;
          height: 14px;
          padding-right: 0.5rem;
          .icon-location {
            background: url("/location-white.svg") no-repeat center center;
          }
          .icon-phone {
            background: url("/phone-white.svg") no-repeat center center;
          }
          .icon-site {
            background: url("/site-white.svg") no-repeat center center;
          }
          .icon-email {
            background: url("/email-white.svg") no-repeat center center;
          }
        }
        .ps-main__title {
          display: flex;
          justify-content: center;
          flex-direction: column;

          h1 {
            color: ${theme.colors.darkCyanTwo};
            font-size: 32px;
            line-height: 1.1em;
            text-align: center;
            @media (min-width: 768px) {
              font-size: 54px;
              text-align: left;
              width: 800px;
            }
          }
        }
      }

      .ps-main__item {
        display: flex;
        align-items: center;
        padding: 0.25rem 0 0rem 0;
        a,
        a:active,
        a:focus,
        a:visited {
          text-decoration: none;
          color: ${theme.colors.darkColor};
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        &.ps-main__item--description {
          justify-content: flex-start;
          padding: 0.5rem 0;
          position: relative;
          height: 104px;
          .ps-main__item--description__text {
            position: absolute;
            top: 0.5rem;
            left: 0;
            display: flex;
            align-items: center;
            padding: 0.5rem 0;
            height: 72px;
            margin: 0;
            text-align: left;
            color: ${theme.colors.blackText};
            font-size: 22px;
            font-weight: 700;
            max-width: 480px;
            line-height: 1.5em;
            opacity: 0;
            @media (min-width: 768px) {
              font-size: 28px;
            }
            &.ps-main__item--description__text--animation {
              animation: fadeInOut 3s;
            }
          }
          .hide {
            opacity: 0;
          }
        }
        .icon {
          margin-left: 0.25rem;
        }
      }
      .ps-main__call-to-actions {
        position: fixed;
        bottom: 0;
        right: 0;
        width: auto;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 1rem 1rem 0;
        z-index: 10;
        transition: 0.5s ease-in;
        &.ps-main__call-to-actions--fixed-limit {
          bottom: 92px;
        }
      }
      .ps-main__maps-and-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 24px;
      }
      .ps-main__maps {
        padding: 16px;
        width: 100%;
        max-width: 100%;
        @media (min-width: 768px) {
          width: 60%;
          max-width: 60%;
        }
      }
      .ps-main__funcy-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0;
        position: relative;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 0.25;
        }
        50% {
          opacity: 0.5;
        }
        75% {
          opacity: 0.75;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeInOut {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0.5;
        }
        20%,
        30%,
        40%,
        50%,
        60%,
        70% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }

      .button {
        background: ${theme.colors.darkCyanTwo};
        box-shadow: 0 8px 6px -6px black;
        border-radius: 9px;
        color: white;
        cursor: pointer;
        font-size: ${buttonFontSize};
        height: ${buttonHeight};
        letter-spacing: 0.2px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        width: ${buttonWidth};
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .icon-phone {
          height: 26px;
          width: 24px;
          background: url("/phone-cyan_old.svg") no-repeat;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          padding-right: 0.5rem;
        }
        > div {
          display: flex;
          flex-direction: column;
          width: 100px;
        }
        &:hover {
          background: lighten(${theme.colors.darkCyanTwo}, 4%);
        }
        &:active {
          box-shadow: inset 0px 2px 8px -1px darken(${theme.colors.darkCyanTwo}, 6%);
        }
      }

      .fancy-button {
        margin: auto;
        position: relative;
      }
      .frills,
      .frills:after,
      .frills:before {
        position: absolute;
        background: ${theme.colors.darkCyanTwo};
        border-radius: (${frillHeight} / 2);
        height: ${frillHeight};
      }
      .frills:after,
      .frills:before {
        content: "";
        display: block;
      }
      .frills:before {
        bottom: ${frillVertSpace};
      }
      .frills:after {
        top: ${frillVertSpace};
      }
      .left-frills {
        right: ${buttonWidth} + ${frillHorizontalOffset};
        top: (${buttonHeight} / 2)- (${frillHeight} / 2);
        .active & {
          animation: move-left ${speed} ${timingFunction},
            width-to-zero ${speed} ${timingFunction};
        }

        &:before,
        &:after {
          left: ${frillStagger};
        }
        &:before {
          .active & {
            animation: width-to-zero ${speed} ${timingFunction},
              move-up ${speed} ${timingFunction};
          }
        }
        &:after {
          .active & {
            animation: width-to-zero ${speed} ${timingFunction},
              move-down ${speed} ${timingFunction};
          }
        }
      }
      .right-frills {
        left: ${buttonWidth} + ${frillHorizontalOffset};
        top: (${buttonHeight} / 2)- (${frillHeight} / 2);
        .active & {
          animation: move-right ${speed} ${timingFunction},
            width-to-zero ${speed} ${timingFunction};
        }
        &:before,
        &:after {
          right: ${frillStagger};
        }
        &:before {
          .active & {
            animation: width-to-zero ${speed} ${timingFunction},
              move-up ${speed} ${timingFunction};
          }
        }
        &:after {
          .active & {
            animation: width-to-zero ${speed} ${timingFunction},
              move-down ${speed} ${timingFunction};
          }
        }
      }

      .left-frills:before,
      .right-frills:after {
        transform: rotate(${frillRotation});
      }

      .left-frills:after,
      .right-frills:before {
        transform: rotate(-${frillRotation});
      }

      @keyframes move-left {
        0% {
          transform: none;
        }
        65% {
          transform: translateX(-1 * ${frillDistance});
        }
        100% {
          transform: translateX(-1 * ${frillDistance});
        }
      }
      @keyframes move-right {
        0% {
          transform: none;
        }
        65% {
          transform: translateX(${frillDistance});
        }
        100% {
          transform: translateX(${frillDistance});
        }
      }
      @keyframes width-to-zero {
        0% {
          width: ${frillWidth};
        }
        100% {
          width: ${frillHeight};
        }
      }
      @keyframes move-up {
        0% {
        }
        100% {
          bottom: ${frillVertSpace} * 1.55;
        }
      }
      @keyframes move-down {
        0% {
        }
        100% {
          top: ${frillVertSpace} * 1.55;
        }
      }
    }
  `}
`;
