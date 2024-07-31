import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e:any) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password12345') {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/favorites');
    } else {
      alert('Username or password is wrong!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
