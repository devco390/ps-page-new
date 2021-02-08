import "./ButtonLogin.scss";

export default function ButtonLogin({ children, disabled, onClick }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
