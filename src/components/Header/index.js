import Logo from "../Logo";

import "./Header.scss";

const PsHeader = () => {
  const redirectHome = () => {
    window.location.href = "/";
  };

  return (
    <header>
      <div
        className="header-logo"
        onClick={redirectHome}
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <Logo />
      </div>
    </header>
  );
};

export default PsHeader;
