import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    alert(`Submitted username: ${value}`);
    inputRef.current.value = "";
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Uncontrolled Username Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            ref={inputRef}
            style={{ padding: 6, width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "6px 16px" }}>Submit</button>
      </form>
    </div>
  );
}

export default App; 