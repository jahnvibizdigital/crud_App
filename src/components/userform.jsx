
import { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, user, users }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    //validation part
    const userName = name.trim();
    const userEmail = email.trim();
    
    if (userName === "" || userEmail === "") {
        alert("Name and Email are required.");
        return;
    }
    if (userName.length < 3) {
        alert("Name should contain at least 3 characters.");
        return;
    }
    if (!/^[A-Za-z ]+$/.test(userName)) {
        alert("Name should contain only letters.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
        alert("Please enter a valid email.");
        return;
    }

    //duplicate 
    const duplicate = users.find(
      u =>
        u.email.toLowerCase() === userEmail.toLowerCase()
    );


    if (duplicate && !user) {
      alert("Email already exists.");
      setName("");
      setEmail("");
      return ;
    }

    const newUser = {
        name: userName,
        email: userEmail,
    };

    if (user) {
        updateUser(newUser);
    } else {
        addUser(newUser);
        alert("User added successfully!");
    }

    setName("");
    setEmail("");
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="add-btn">
        {user ? "Update User" : "Add User"}
      </button> 
    </form>
  );
}

export default UserForm;