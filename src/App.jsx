
import './App.css'
import UsersList from './components/UsersList'
import UserState from './context/UserState'

function App() {

  return (
    
     <UserState>
   <UsersList/>
     </UserState>
  )
}

export default App
