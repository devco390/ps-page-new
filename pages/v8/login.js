import useUser from "hooks/useUser";

import Login from "src/components/backOffice/Login";
import { USER_LOGIN_STATES } from "src/components/backOffice/Login/mock";
import Loading from "src/components/Loading";

const BoLogin = () => {
  const { user } = useUser();

  return (
    <>
      {user === USER_LOGIN_STATES.NOT_LOGGED && <Login />}
      {user === USER_LOGIN_STATES.NOT_KNOWN && <Loading show={true} />}
    </>
  );
};

export default BoLogin;
