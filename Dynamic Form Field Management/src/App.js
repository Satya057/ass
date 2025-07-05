import React, { useState } from "react";

function validateEmail(email) {
  // Simple email regex for validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function App() {
  const [emails, setEmails] = useState([
    { value: "", error: "" }
  ]);

  const handleAddEmail = () => {
    setEmails([...emails, { value: "", error: "" }]);
  };

  const handleChange = (index, newValue) => {
    const updatedEmails = emails.map((email, i) => {
      if (i === index) {
        const error = newValue && !validateEmail(newValue)
          ? "Invalid email format"
          : "";
        return { value: newValue, error };
      }
      return email;
    });
    setEmails(updatedEmails);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Dynamic Email Form</h2>
      <form onSubmit={e => e.preventDefault()}>
        {emails.map((email, idx) => (
          <div key={idx} style={{ marginBottom: 16 }}>
            <label>Email {idx + 1}: </label>
            <input
              type="email"
              value={email.value}
              onChange={e => handleChange(idx, e.target.value)}
              style={{ padding: 6, width: "100%" }}
              placeholder="Enter email"
            />
            {email.error && (
              <div style={{ color: "red", fontSize: 13 }}>{email.error}</div>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddEmail} style={{ padding: "6px 16px", marginBottom: 16 }}>
          Add Email
        </button>
      </form>
      <div style={{ marginTop: 24 }}>
        <h4>Entered Emails:</h4>
        <ul>
          {emails.filter(e => e.value).map((e, i) => (
            <li key={i}>{e.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App; 