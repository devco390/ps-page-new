import { useState } from "react";
import { addUser, findUserByEmail, loginWithGmail } from "firebase/Client";
import ButtonLogin from "../ButtonLogin";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import Logo from "src/components/Logo";
import Gmail from "src/components/icons/Gmail";
import Loading from "src/components/Loading";

import "./Login.scss";
import {
  USER_STATES,
  USER_ROLES,
  LOGIN_STATES,
  MESSAGE_MODAL_GMAIL_OPEN,
} from "./mock";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(LOGIN_STATES.USER_NOT_KNOWN);

  const messageLoading =
    status === LOGIN_STATES.MODAL_IS_OPEN ? MESSAGE_MODAL_GMAIL_OPEN : "";
  const isButtonDisabled =
    email.length === 0 ||
    !validateEmail(email) ||
    status === LOGIN_STATES.LOADING;

  const showLoading =
    status === LOGIN_STATES.LOADING || status === LOGIN_STATES.MODAL_IS_OPEN;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getFindUserByEmail();
  };

  const getFindUserByEmail = () => {
    setStatus(LOGIN_STATES.LOADING);
    findUserByEmail(email)
      .then((response) => {
        console.log("info user by sirebase:::", response[0]);
        if (response[0] === undefined) {
          setStatus(LOGIN_STATES.USER_NOT_KNOWN);
          setOpen(true);
        } else {
          setStatus(LOGIN_STATES.MODAL_IS_OPEN);
          getLoginWithGmail();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getLoginWithGmail = () => {
    loginWithGmail()
      .then((result) => {
        // const credential = result.credential;
        // const token = credential.accessToken;
        // const user = result.user;
        console.log(result);
        setStatus(LOGIN_STATES.SUCCESS);
      })
      .catch((error) => {
        console.log(error);
        setStatus(LOGIN_STATES.ERROR);
      });
  };

  const addnewUser = () => {
    const userId = "Y7zwDwTCtKd1kOZSgHyMHn5DQ3U2";
    const email = "danieling1990@gmail.com";
    const userName = "daniel perez";
    const rol = USER_ROLES.IT_MANAGER;
    const state = USER_STATES.ACTIVE;

    addUser({
      userId,
      email,
      userName,
      rol,
      state,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleClick = () => {
    getFindUserByEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Loading show={showLoading} message={messageLoading} />
      <div className="bo-login">
        <div className="bo-login__form">
          <div className="bo-login__logo">
            <Logo />
          </div>
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="Ingrese su Correo"
            value={email}
          ></input>
          <ButtonLogin onClick={handleClick} disabled={isButtonDisabled}>
            <span>
              <Gmail fill="#fff" width={24} height={24} />
            </span>
            <label>Iniciar Sesión con Gmail</label>
          </ButtonLogin>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          correo no autorizado.
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Login;
