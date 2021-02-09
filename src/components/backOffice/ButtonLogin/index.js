import "./ButtonLogin.scss";

export default function ButtonLogin({ children, disabled, onClick }) {
  return (
    <>
      <button className="button-login" disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
