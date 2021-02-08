import { addUser } from "firebase/Client";
import Button from "../Button";

const Login = () => {
  const USER_STATES = {
    ACTIVE: "active",
    INACTIVE: "inactive",
  };

  const USER_ROLES = {
    IT_MANAGER: "it_manager",
    MANAGER: "manager",
    TECHNICAL: "technical",
  };

  const handleSubmit = (event) => {
    const userId = "Y7zwDwTCtKd1kOZSgHyMHn5DQ3U2";
    const email = "danieling1990@gmail.com";
    const userName = "daniel perez";
    const rol = USER_ROLES.IT_MANAGER;
    const state = USER_STATES.ACTIVE;

    event.preventDefault();
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="text"></input>
      </div>
      <Button>Iniciar sesion</Button>
    </form>
  );
};

export default Login;
