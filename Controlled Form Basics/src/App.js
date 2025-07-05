import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      alert(`Submitted username: ${username}`);
      setUsername("");
      setError("");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Controlled Username Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleChange}
            style={{ padding: 6, width: "100%" }}
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ padding: "6px 16px" }}>Submit</button>
      </form>
    </div>
  );
}

export default App; 