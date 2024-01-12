import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const{selectedUser}=useContext(UserContext)



  return (
    <div>Profile</div>
  )
}

export default Profile