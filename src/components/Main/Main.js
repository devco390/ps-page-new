import { useState, useEffect } from "react";
import PsGallery from "../Gallery";
import PsCallToActions from "../CallToActions";
import PsFooter from "../Footer";

import "./Main.scss";

const Main = () => {
  const descriptions = [
    { text: "Mantenimientos Preventivos y Correctivos." },
    { text: "Domicilio sin costo en Bogotá." },

    {
      text: "Venta de Cartuchos, Toner y Tintas.",
    },
    {
      text: "Rehabilitación Profesional en Piezas de Impresoras.",
    },
  ];

  const phone = "+57-311-4386970";
  const [animationClass, setAnimationClass] = useState("");
  const [dataIp, setDataIp] = useState("");
  const [toFadeIn, setToFadeIn] = useState(descriptions.length);
  const [slideCount, setSlideCount] = useState(descriptions.length);

  useEffect(() => {
    changeFadeIn();
  }, []);

  const saveAnalyticsTrack = (tag) => {
    console.log(tag);
  };
  const saveDataAction = (tag) => {
    console.log(tag);
  };

  const changeFadeIn = () => {
    setToFadeIn(toFadeIn + 1);

    if (toFadeIn > slideCount) {
      setAnimationClass("active");
      toFadeIn = 1;
    }
    const els = document.querySelectorAll(".ps-main__item--description__text");
    for (let i = 0; i < els.length; i += 1) {
      const el = els[i];

      el.classList.remove("ps-main__item--description__text--animation");
      el.classList.add("hide");
    }

    const elToFadeIn = document.querySelector(
      `.ps-main__item--description__text--${toFadeIn}`
    );

    elToFadeIn.classList.remove("hide");
    elToFadeIn.classList.add("ps-main__item--description__text--animation");

    setTimeout(() => {
      changeFadeIn();
    }, 3000);
  };
  const onHandleClickMainButton = (e) => {
    // setAnimationClass('active');
    // saveAnalyticsTrack('llamada-pagina-inicial');
    // saveDataAction('llamada-flotante');
  };

  const onHandleAnimationEndMainButton = (e) => {
    setAnimationClass("");
  };

  return (
    <div className="ps-main">
      <div className="ps-main__sections">
        <section className="ps-main__wrapper-image-title">
          <div className="ps-main__image">
            <img
              className=""
              src="https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fprinter.jpg?alt=media&token=6ae12ab2-5378-4f59-8b00-01e7659c0a12"
            />
          </div>

          <div
            className="ps-main__data"
            itemScope
            itemType="http://schema.org/LocalBusiness"
          >
            <div className="ps-main__title animate__animated animate__fadeInDown">
              <h1 itemProp="description">
                Mantenimiento y Venta de Suministros para Impresoras.
              </h1>
            </div>
            <div className="ps-main__item ps-main__item--description animate__animated animate__fadeInDown">
              {descriptions.map((description, index) => (
                <p
                  className={`ps-main__item--description__text ps-main__item--description__text--${
                    index + 1
                  }
                `}
                  key={index}
                >
                  {description.text}
                </p>
              ))}
            </div>
            <button onClick={onHandleClickMainButton}>login</button>
            <div className="ps-main__funcy-button animate__animated animate__fadeInLeft">
              <a
                href={`tel:${phone}`}
                className={`funcy-button ${animationClass}`}
                onClick={onHandleClickMainButton}
                onAnimationEnd={onHandleAnimationEndMainButton}
              >
                <div className="left-frills frills"></div>
                <div className="button">
                  <i className="icon-phone"></i>
                  <div>
                    <span className="button__label">Llama Ahora </span>
                    <span className="button__number">311 438 69 70</span>
                  </div>
                </div>
                <div className="right-frills frills"></div>
              </a>
            </div>
          </div>
        </section>
        <section className="ps-main__who">
          <h2>QUIÉNES SOMOS</h2>
          <p>
            Somos una empresa con mas de 10 años de experiencia en el sector de
            equipos de impresión, realizamos todo tipo de mantenimientos tanto
            preventivos como correctivos en impresoras de todas las marcas como
            también la venta de Toners, tintas, cartuchos originales y genéricos
            optimizando costos al momento de sus impresiones.
          </p>
        </section>
        <section className="ps-main__gallery">
          <h2>GALERÍA</h2>
          <PsGallery />
        </section>
        <section className="ps-main__call-to-actions">
          <PsCallToActions dataIp={dataIp} />
        </section>
      </div>
      <PsFooter />
    </div>
  );
};

export default Main;
