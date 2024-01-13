import axios from "axios";
import UserContext from "../User/UserContext";
import {GET_USERS,GET_PROFILE} from "../types"
import { useReducer } from "react";
import UserReducer from "./UserReducer";


const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const[state,dispacth]=useReducer(UserReducer,initialState)

  const getUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    const data = response.data.data
    dispacth({type:GET_USERS,payload:data})
    console.log(data);
  };

  const getProfile = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const{data}=response;
    dispacth({type:GET_PROFILE,payload:data.data})
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
