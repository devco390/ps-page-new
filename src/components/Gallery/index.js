import { useState, useRef } from "react";
import * as S from "./styles";

const PsGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeImage = useRef();
  const lightboxContainer = useRef();
  const gallery = useRef();

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_242497756.jpg?alt=media&token=df882298-4bd4-4f92-8999-f7d3484a96b3",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1719513457.jpg?alt=media&token=e09e6c78-ea16-4370-b6ec-82b9a8a02289",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1347514346.jpg?alt=media&token=987ba22d-738b-4964-b237-3eb9cf78203b",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1158108100.jpg?alt=media&token=99199a46-3f2a-47c0-b014-86c5f86d96dd",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6363.jpg?alt=media&token=4e83b555-204e-4391-900a-b04dd7372956",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6333.jpg?alt=media&token=a4d6e3f0-38b4-4b1b-9526-c1fed4b341cb",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6311.jpg?alt=media&token=e72e9592-ad1d-457e-baea-0a5cfd33739c",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6305.jpg?alt=media&token=d19ff4bc-0915-4bf6-ab8c-02bcb999c6fa",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6317.jpg?alt=media&token=80f4b538-f6cf-43f5-b471-9315b11981f1",
  ];

  const imagesSmall = [
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_242497756.jpg?alt=media&token=c2857bec-c4f2-4c81-850c-dc8436af103f",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1719513457.jpg?alt=media&token=44e502d5-ce71-46bd-ade5-143e8517bd54",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1347514346.jpg?alt=media&token=57568d4f-0506-4c8b-9bca-2aea8c307705",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1158108100.jpg?alt=media&token=dd52fa09-9bff-41b2-9690-48eb10759190",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6363.jpg?alt=media&token=1ba5a901-1e54-4340-bafe-bee73bdd87c5",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6333.jpg?alt=media&token=acecdf77-9b97-4233-84cf-85e634a8045e",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6317.jpg?alt=media&token=76cc17da-973f-4ecc-94bc-622944cee802",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6311.jpg?alt=media&token=2e750e47-80ca-4145-bdc5-8b4fb0997db1",
    "https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6305.jpg?alt=media&token=09d9b31c-ae9f-4854-9a1a-dd6365fc5987",
  ];

  const openModal = () => {
    lightboxContainer.current.style.display = "flex";
    document.body.style.overflow = "hidden";
    gallery.current.style.filter = "blur(5px)";
  };

  const closeModal = () => {
    lightboxContainer.current.style.display = "none";
    document.body.style.overflow = "initial";
    gallery.current.style.filter = "blur(0)";
  };
  const changeImage = (n) => {
    activeImage.current.src = images[n];
    setCurrentSlide(n);
    return currentSlide;
  };

  const onHandleClickImage = (i) => {
    openModal();
    changeImage(i);
  };

  const nextSlide = (n) => {
    if (currentSlide < 1 && n == -1) {
      setCurrentSlide(images.length - 1);
      activeImage.current.src = images[currentSlide];
      return currentSlide;
    } else if (
      currentSlide < images.length - 1 &&
      currentSlide >= 0 &&
      n == 1
    ) {
      setCurrentSlide(currentSlide + 1);
      activeImage.current.src = images[currentSlide];
      return currentSlide;
    } else if (currentSlide == images.length - 1 && n == 1) {
      setCurrentSlide(0);
      activeImage.current.src = images[currentSlide];
      return currentSlide;
    } else {
      setCurrentSlide(currentSlide - 1);
      activeImage.current.src = images[currentSlide];
      return currentSlide;
    }
  };

  return (
    <S.Wrapper>
      <div className="gallery" ref={gallery}>
        <div className="row">
          {imagesSmall.map((image, index) => (
            <img
              src={image}
              key={index}
              onClick={() => {
                onHandleClickImage(index);
              }}
              alt="Printer Image"
            />
          ))}
        </div>
      </div>

      <div className="lightboxContainer" ref={lightboxContainer}>
        <div className="lightbox">
          <div className="close" onClick={closeModal}>
            &#10006;
          </div>

          <div
            className="prev"
            onClick={() => {
              nextSlide(-1);
            }}
          >
            &#60;
          </div>
          <div className="activeImage">
            <img
              id="activeImage"
              ref={activeImage}
              src={images[0]}
              alt="Printing Solutions"
            />
          </div>
          <div
            className="next"
            onClick={() => {
              nextSlide(1);
            }}
          >
            &#62;
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default PsGallery;
