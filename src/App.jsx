import { useState, useEffect } from "react";
import UserForm from "./components/userform";
import UserList from "./components/userList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(-1);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addUser(user) {
    users.push(user);
    setUsers(users.slice());
  }

  function updateUser(user) {
    users[editUser] = user;
    setUsers(users.slice());
    setEditUser(-1);

    alert("User updated successfully!");
  }
  function deleteUser(index) {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      users.splice(index, 1);
      setUsers(users.slice());
    }
  }

  return (
    <div className="container">
      <h1>CRUD App</h1>

      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        user={users[editUser]}
        users={users}
      />

      <UserList
        users={users}
        setEditIndex={setEditUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;