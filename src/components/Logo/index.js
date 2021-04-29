import * as S from "./styles";

const Logo = () => {
  return (
    <S.Wrapper className="ps-logo">
      <div>
        <h1 itemProp="name">Printing Solutions</h1>
      </div>
      <div className="dots">
        <div className="dot lightblue cyan"></div>
        <div className="dot lightblue yellow"></div>
        <div className="dot lightblue magenta"></div>
      </div>
    </S.Wrapper>
  );
};

export default Logo;
