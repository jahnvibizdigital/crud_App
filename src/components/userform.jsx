
import { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, user, users }) {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setData(
        typeof user.data === "object"
          ? JSON.stringify(user.data)
          : user.data
      );
    } else {
      setName("");
      setData("");
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    //validation part
    const userName = name.trim();
    const userData = data.trim();
    
    if (userName === "" || userData === "") {
        alert("Name and Data are required.");
        return;
    }
    if (userName.length < 3) {
        alert("Name should contain at least 3 characters.");
        return;
    }
    const newUser = {
        name: userName,
        data: {
          Details: userData,
        }
    };

    if (user) {
        updateUser(newUser);
    } else {
        addUser(newUser);
        alert("User added successfully!");
    }

    setName("");
    setData("");
}
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder='{"color":"White","capacity":"128 GB"}'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button className="add-btn">
        {user ? "Update User" : "Add User"}
      </button> 
    </form>
  );
}

export default UserForm;