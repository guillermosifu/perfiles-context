import { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

const UsersList = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUsers();
  }, []);

  return (
    <>
      <h1>Hola</h1>
    </>
  );
};

export default UsersList;
