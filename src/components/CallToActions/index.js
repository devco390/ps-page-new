import { useState } from "react";

import * as S from "./styles";

const PsCallToActions = () => {
  const [phone] = useState("+57-311-4386970");

  const saveAnalyticsTrack = (action) => {
    console.log(action);
  };
  const saveDataAction = (action) => {
    console.log(action);
  };

  return (
    <S.Wrapper>
      <a
        className="call-to-action call-to-action--call animate__animated animate__fadeInUp animate__delay-1s"
        href={`tel:${phone}`}
        onClick={() => {
          saveAnalyticsTrack("llamada-flotante");
          saveDataAction("llamada-flotante");
        }}
      >
        <div className="call-to-action__text">
          <span className="call-to-action__text--label">Contáctenos</span>
          <span className="call-to-action__number">311 438 69 70</span>
        </div>
        <div className="call-to-action__circle">
          <i className="Phone is-animating"></i>
        </div>
      </a>

      <a
        className="call-to-action call-to-action--whatsapp animate__animated animate__fadeInUp animate__delay-1s"
        href={`https://api.whatsapp.com/send?phone=${phone}`}
        onClick={() => {
          saveAnalyticsTrack("whatsapp-flotante");
          saveDataAction("whatsapp-flotante");
        }}
      >
        <div className="call-to-action__text">
          <span> Atención en Línea</span>
        </div>
        <div className="call-to-action__circle">
          <i className="Phone icon-whatsapp"></i>
        </div>
      </a>
    </S.Wrapper>
  );
};

export default PsCallToActions;
