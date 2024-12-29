import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Hardcoded admin credentials
      if (username === 'admin' && password === 'admin123') {
        onLogin(); // Pass the login state change to parent
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div className="admin-login">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login as Admin</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;
