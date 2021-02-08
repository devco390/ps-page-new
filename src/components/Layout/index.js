import Main from "../Main/Main";
import PsHeader from "../Header";
import PsBanner from "../Banner";
import "./Layout.scss";
import "../../styles.scss";

const PsLayout = () => {
  return (
    <div className="ps-container">
      <div className="ps-container__wrapper">
        <div className="ps-header">
          <PsHeader />
        </div>
        <div className="ps-banner">
          <PsBanner />
        </div>

        <div className="ps-main__container">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default PsLayout;
