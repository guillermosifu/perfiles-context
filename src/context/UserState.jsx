import axios from "axios";
import UserContext from "./UserContext";


const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const getUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    const data = response.data.data
    console.log(data);
  };

  const getProfile = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(response);
  };

  return (
    <UserContext.Provider
      value={{
        user: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.Children}
    </UserContext.Provider>
  );
};

export default UserState;
