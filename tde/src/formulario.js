import React, { useState } from 'react';
import './App.css';

const Formulariotde = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={handleCheckboxChange}
              />
              Mostrar senha
            </label>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      ) : (
        <div>
          <p>Email: {email}</p>
          <p>Senha: {password}</p>
        </div>
      )}
    </div>
  );
};

export default Formulariotde;
