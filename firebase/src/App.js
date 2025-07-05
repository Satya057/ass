import React, { useEffect, useState } from "react";
import axios from "axios";

// TODO: Replace with your actual Firebase Realtime Database URL
const FIREBASE_URL = "https://multi-6873c.firebaseio.com/users.json";
const FIREBASE_BASE = "https://multi-6873c.firebaseio.com/users";

function validateEmail(email) {
  // Simple email regex for validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch users from Firebase
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(FIREBASE_URL);
      const data = res.data || {};
      const userList = Object.entries(data).map(([id, user]) => ({ id, ...user }));
      setUsers(userList);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and Email are required");
      return false;
    }
    if (!validateEmail(form.email)) {
      setError("Invalid email format");
      return false;
    }
    setError("");
    return true;
  };

  // Add or Edit user
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      if (editId) {
        // Edit user (PATCH)
        await axios.patch(`${FIREBASE_BASE}/${editId}.json`, form);
        setEditId(null);
      } else {
        // Add user (POST)
        await axios.post(FIREBASE_URL, form);
      }
      setForm({ name: "", email: "" });
      fetchUsers();
    } catch (err) {
      setError("Failed to submit user");
    } finally {
      setLoading(false);
    }
  };

  // Start editing a user
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
    setError("");
  };

  // Delete a user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setLoading(true);
    try {
      await axios.delete(`${FIREBASE_BASE}/${id}.json`);
      fetchUsers();
    } catch (err) {
      setError("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>User Management System</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ padding: 6, width: "100%" }}
            placeholder="Enter name"
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: 6, width: "100%" }}
            placeholder="Enter email"
            required
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ padding: "6px 16px" }}>
          {editId ? "Update User" : "Add User"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => { setEditId(null); setForm({ name: "", email: "" }); setError(""); }}
            style={{ marginLeft: 10, padding: "6px 16px" }}
          >
            Cancel
          </button>
        )}
      </form>
      <h4>User List</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: 12, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
              <span><b>{user.name}</b> ({user.email})</span>
              <button onClick={() => handleEdit(user)} style={{ marginLeft: 10, padding: "2px 10px" }}>Edit</button>
              <button onClick={() => handleDelete(user.id)} style={{ marginLeft: 6, padding: "2px 10px" }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App; 