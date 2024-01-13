import { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

const UsersList = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {userContext.users.length 
      ? userContext.users.map((user)=>(
        <a href="!#"
        onClick={()=>userContext.getProfile(user.id)} className="list-group-item list-group-item-action d-flex flex-row">
        <img src={user.avatar} alt="" />
        <p>{user.first_name + "" +user.last_name}</p>
          
        </a>
      )):(
        null
      )}
    </div>
  );
};

export default UsersList;
