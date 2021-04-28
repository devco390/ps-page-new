import styled, { css } from "styled-components";
import { useState } from "react";

const FONT_WEIGHT = {
  BOLD: 700,
  NORMAL: 400,
};

export const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
  min-width: 800px;
  overflow: auto;
`;

export const themeInvite = {
  fonts: {
    medium: {
      fontWeight: FONT_WEIGHT.NORMAL,
      fontSize: "12px",
      lineHeight: "24px",
    },
    small: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "8px",
      lineHeight: "10px",
    },
    mediumBold: {
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "12px",
      lineHeight: "24px",
    },
  },
  bold: {
    normal: 400,
    bold: 700,
  },
  color: {
    red: "#be3147",
    blue: "#5ea197",
  },
};

export const fontSm = css`
  font-weight: ${themeInvite.fonts.small.fontWeight};
  font-size: ${themeInvite.fonts.small.fontSize};
  line-height: ${themeInvite.fonts.small.lineHeight};
`;
export const fontMd = css`
  font-weight: ${themeInvite.fonts.medium.fontWeight};
  font-size: ${themeInvite.fonts.medium.fontSize};
  line-height: ${themeInvite.fonts.medium.lineHeight};
`;
export const fontMdBold = css`
  font-weight: ${themeInvite.fonts.mediumBold.fontWeight};
  font-size: ${themeInvite.fonts.mediumBold.fontSize};
  line-height: ${themeInvite.fonts.mediumBold.lineHeight};
`;

export const Card = styled.div`
  font-family: Comfortaa;
  width: auto;
  height: auto;
  border: 1px dashed ${themeInvite.color.blue};
  border-radius: 8px;
  display: inline-grid;
  grid-template-columns: 440px 300px;
  background-color: #ffffff;
`;

export const CardLeft = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  border-right: 1px dashed ${themeInvite.color.blue};
`;
export const CardRight = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
`;

export const CardHeader = styled.div`
  display: flex;
  padding: 8px 0 16px 16px;
  &.center {
    justify-content: center;
    align-items: center;
  }
  img {
    width: 16px;
    padding-right: 4px;
  }
  > div {
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
      ${fontMdBold}
      color: ${themeInvite.color.red};
    }
    span:nth-child(2) {
      ${fontMd}
      color: ${themeInvite.color.red};
    }
  }
`;

export const CoupleNames = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 19px;

  > div {
    background-color: ${themeInvite.color.red};
    display: inline-flex;
    color: #fff;
    padding-left: 8px;
    padding-right: 16px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    width: auto;
    position: relative;
    h3 {
      text-align: center;
      &.separator {
        padding: 0 8px;
        display: flex;
        align-items: center;
      }
    }
    img {
      width: 200px;
      position: absolute;
      bottom: -36px;
      left: calc(100% - 22px);
    }
  }
`;

export const WhiteLine = styled.div`
  background-color: #fff;
  height: 24px;
  width: 100%;
  color: ${themeInvite.color.red};
  display: flex;
  align-items: center;
  padding-left: 8px;
  span:nth-child(1) {
    ${fontMdBold}
  }
  span:nth-child(2) {
    ${fontMd}
  }
`;
export const Quote = styled.div`
  background-color: #fff;
  height: auto;
  width: 100%;
  color: ${themeInvite.color.blue};
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  p {
    ${fontSm}
    text-transform: uppercase;
    margin: 0px;
    text-align: justify;
    &.red {
      color: ${themeInvite.color.red};
      padding-bottom: 4px;
    }
  }
`;

export const BlueLine = styled.div`
  background-color: ${themeInvite.color.blue};
  height: 24px;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 8px;
  &.center {
    justify-content: center;
  }
  span:nth-child(1) {
    ${fontMdBold}
  }
`;
export const DivDivide = styled.div`
  display: flex;
  > div:nth-child(1) {
    width: 50%;
  }
  > div:nth-child(2) {
    width: 50%;
  }
`;
export const DivDivideThree = styled.div`
  display: flex;
  > div:nth-child(1) {
    width: 45%;
  }
  > div:nth-child(2) {
    width: 10%;
  }
  > div:nth-child(3) {
    width: 45%;
  }
`;
export const CtnWhite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin-bottom: 24px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themeInvite.color.red};
  height: 12px;
  ${fontSm};
  position: relative;
  span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    white-space: nowrap;
  }
`;

const Invites = () => {
  const [invite, setInvite] = useState("DANIEL PEREZ");

  return (
    <Wrapper>
      <FormGroup>
        <label htmlFor="invite">Nombre del invitado</label>
        <input
          type="text"
          name="invite"
          value={invite}
          onChange={(e) => {
            setInvite(e.target.value);
          }}
        />
      </FormGroup>
      <Card>
        <CardLeft>
          <CardHeader>
            <img className="" src="/heart.svg" />
            <div>
              <span>TIQUETE DE PRIMERA CLASE</span>
              <span>FIRST CLASS TICKET</span>
            </div>
          </CardHeader>
          <CoupleNames>
            <div>
              <h3>
                MONICA <br /> PEREZ
              </h3>
              <h3 className="separator">&</h3>
              <h3>
                ORLANDO
                <br /> OCAMPO
              </h3>
              <img src="/plane-love.svg" />
            </div>
          </CoupleNames>
          <WhiteLine>
            <span>DESTINO</span>
            <span>/DESTINATION</span>
          </WhiteLine>
          <BlueLine>
            <span>Restaurante Bk, Santa Marta, el Rodadero</span>
          </BlueLine>
          <DivDivide>
            <WhiteLine>
              <span>FECHA</span>
              <span>/DATE</span>
            </WhiteLine>
            <WhiteLine>
              <span>HORA</span>
              <span>/TIME</span>
            </WhiteLine>
          </DivDivide>
          <DivDivide>
            <BlueLine>
              <span>22.05.2021</span>
            </BlueLine>
            <BlueLine>
              <span>03:00 PM</span>
            </BlueLine>
          </DivDivide>
          <Quote>
            <p>
              COMO LA VIDA ES UN VIAJE HEMOS DECIDIDO CASARNOS Y NOS ENCANTARIA
              QUE NOS ACOMPAÑES EN ESTE DIA TAN ESPECIAL...
            </p>
          </Quote>
          <Quote>
            <p className="red">
              "Quiero que sepas, sin embargo, que todas las noches que he
              dormido a tu lado, incluso las discusiones más inútiles, siempre
              fueron algo espléndido, y esas difíciles palabras que siempre temí
              decir, pueden decirse ahora: Te amo"
            </p>
          </Quote>
          <Footer>
            <span>
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
              MONICA & ORLANDO &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; 22/05/2021
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; L
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; O
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; V
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; E
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            </span>
          </Footer>
        </CardLeft>
        <CardRight>
          <CardHeader className="center">
            <img className="" src="/heart.svg" />
            <div>
              <span>PASABORDO</span>
              <span>BOARDING PASS</span>
            </div>
          </CardHeader>
          <WhiteLine>
            <span>PASAJERO</span>
            <span>/PASSENGER</span>
          </WhiteLine>
          <BlueLine>
            <span style={{ textTransform: "uppercase" }}>{invite}</span>
          </BlueLine>
          <DivDivideThree>
            <WhiteLine>
              <span>DESDE</span>
              <span>/FROM</span>
            </WhiteLine>
            <div />
            <WhiteLine>
              <span>DESTINO</span>
              <span>/TO</span>
            </WhiteLine>
          </DivDivideThree>
          <DivDivideThree>
            <BlueLine>
              <span>BOGOTÁ</span>
            </BlueLine>
            <div />
            <BlueLine>
              <span>SANTA MARTA</span>
            </BlueLine>
          </DivDivideThree>
          <WhiteLine>
            <span>CONFIRMACIÓN</span>
            <span>/RSVP</span>
          </WhiteLine>
          <BlueLine>
            <span>311 2284441 - 311 4386970 (&le; 10.05.2021)</span>
          </BlueLine>
          <WhiteLine>&nbsp;</WhiteLine>
          <BlueLine>&nbsp;</BlueLine>
          <CtnWhite>
            <div>
              <WhiteLine>
                <span>VUELO</span>
                <span>/FLIGHT</span>
              </WhiteLine>
              <BlueLine className="center">
                <span>22.05.2021</span>
              </BlueLine>
            </div>
          </CtnWhite>
        </CardRight>
      </Card>
    </Wrapper>
  );
};

export default Invites;
