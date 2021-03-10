import useUser from "hooks/useUser";
import Base from "src/components/backOffice/Base";
import Loading from "src/components/Loading";

import { USER_LOGIN_STATES } from "src/components/backOffice/Login/mock";

const Kitty = () => {
  const user = useUser();

  return (
    <>
      {user === USER_LOGIN_STATES.NOT_LOGGED ||
        (user === USER_LOGIN_STATES.NOT_KNOWN && (
          <Loading show={true} message={"Cargando"} />
        ))}
      {user && <Base />}
    </>
  );
};

export default Kitty;
