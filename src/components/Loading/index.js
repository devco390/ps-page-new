import * as S from "./styles";

const Loading = ({ show, message }) => {
  return (
    show && (
      <div className="ps-loading">
        <div className="ps-loading__loader">
          <div className="ps-loading__loader__dots">
            <div className="ps-loading__loader__dot"></div>
            <div className="ps-loading__loader__dot"></div>
            <div className="ps-loading__loader__dot"></div>
          </div>

          <div className="ps-loading__loader__text">
            <span>{message && message.length > 0 ? message : "Cargando"}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default Loading;
