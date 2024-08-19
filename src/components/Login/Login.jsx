import React, { useState } from 'react';
import './login.css'; // Importo stilizimin

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Shto logjikën e login këtu
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="tabs">
          <button className="active">Login</button>
          <button>Signup</button>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">Create an account <a href="#">Signup now</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
