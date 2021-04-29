import Logo from "../Logo";

import * as S from "./styles";

const PsHeader = () => {
  const redirectHome = () => {
    window.location.href = "/";
  };

  return (
    <S.Wrapper>
      <div
        className="header-logo"
        onClick={redirectHome}
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <Logo />
      </div>
    </S.Wrapper>
  );
};

export default PsHeader;
