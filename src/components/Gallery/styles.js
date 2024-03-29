import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      display: flex;
      justify-content: center;
      max-width: 900px;
      flex-wrap: wrap;
      img {
        width: 31%;
        min-height: 250px;
        margin: 5px;
        cursor: pointer;
        transition: all ease-in-out 250ms;
        filter: brightness(60%);
        object-fit: cover;
      }
      img:hover {
        filter: brightness(100%);
      }
    }
  }

  .lightboxContainer {
    background-color: #00000099;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    display: none;
    .lightbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img {
        width: 100%;
        max-width: 800px;
      }
      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        font-size: 40px;
        color: white;
      }
      .prev,
      .next {
        user-select: none;
        cursor: pointer;
        font-size: 50px;
        color: white;
        margin: 40px;
        font-weight: 800;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .gallery {
      width: initial;
      height: initial;
      .row {
        flex-direction: column;
        align-items: center;
        img {
          width: 400px;
          height: 400px;
        }
      }
    }
    .lightboxContainer {
      .lightbox {
        .prev,
        .next {
          margin: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .gallery {
      .row {
        img {
          width: 300px;
          height: 300px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .gallery {
      .row {
        img {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
`;
