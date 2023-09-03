import React, { useState } from 'react';
import '../components/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/login', {
        username,
        password
      });
      if (result?.data?.message === 'logged in successfully') {
        window.localStorage.setItem('user', JSON.stringify(result.data.data.user))
        window.localStorage.setItem('token', JSON.stringify(result.data.data.token))
        navigate('/complaints');
      }
    } catch (e) {
      if (e?.message) {
        return alert(e.message);
      }
    }
  };

  return (
    <div className="login-form-container">
    <div className="login-form" style={{}}>
      <h2 style={{color:"white"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        style={{backgroundColor:"transparent"}}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
