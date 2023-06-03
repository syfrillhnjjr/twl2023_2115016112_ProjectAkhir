import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi formulir
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Harap isi semua field!');
      return;
    }

    // Lakukan sesuatu dengan data yang dikirimkan
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset nilai input setelah mengirimkan data
    setName('');
    setEmail('');
    setPassword('');

    // Alihkan pengguna ke halaman Dashboard
    navigate('/dashboard');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label className="form-label">
        Nama:
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="form-label">
        Password:
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default HomePage;
