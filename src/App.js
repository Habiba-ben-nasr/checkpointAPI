import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./Components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;