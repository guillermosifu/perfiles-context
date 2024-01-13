import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsersList from "./components/UsersList";
import UserState from "./context/User/UserState";
import Profile from "./components/Profile";

function App() {
  return (
    <UserState>
      <div className="card container">
        <div className="row">
          <div className="col-md-7">
            <UsersList />
          </div>
          <div className="col-md-5">
            <Profile/>
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
