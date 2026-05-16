import { useState } from "react";

function Registration() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (name === "" || email === "" || password === "") {

      setError("All fields are required");
      setSuccess("");

    } else {

      setError("");
      setSuccess("Registration Successful");

      const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
      };

      setUsers([...users, newUser]);

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Registration Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "90%", padding: "8px" }}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "90%", padding: "8px" }}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "90%", padding: "8px" }}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{success}</p>
      </form>

      <h2>Registered Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id} | Name: {user.name} | Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registration;