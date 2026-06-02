import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.trim()) login(password.trim());
  }

  return (
    <div className="login-layout">
      <div className="login-card">
        <div className="login-icon">⚡</div>
        <h1 className="login-title">EID RAG Chat</h1>
        <p className="login-sub">Entrez le mot de passe pour accéder à l'application</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
          />
          <button className="btn btn-primary login-btn" type="submit" disabled={!password.trim()}>
            Accéder
          </button>
        </form>
      </div>
    </div>
  );
}
