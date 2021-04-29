import * as S from "./styles";

export default function ButtonLogin({ children, disabled, onClick }) {
  return (
    <>
      <S.Wrapper disabled={disabled} onClick={onClick}>
        {children}
      </S.Wrapper>
    </>
  );
}
