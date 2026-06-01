import { useState } from 'react';
import { ConfigTab } from './components/ConfigTab';
import { ChatTab } from './components/ChatTab';
import { HomePage } from './components/HomePage';
import { useProvider } from './context/ProviderContext';
import { PROVIDERS } from './types';
import './App.css';

type Tab = 'home' | 'chat' | 'config';

export default function App() {
  const [tab, setTab] = useState<Tab>('home');
  const { provider, setProvider } = useProvider();

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-brand" style={{ cursor: 'pointer' }} onClick={() => setTab('home')}>
          <div className="sidebar-brand-icon">⚡</div>
          <div className="sidebar-brand-name">
            EID RAG <span>Chat</span>
          </div>
        </div>

        <div className="sidebar-section">Navigation</div>

        <button
          className={`nav-item ${tab === 'home' ? 'active' : ''}`}
          onClick={() => setTab('home')}
        >
          <span className="nav-item-icon">🏠</span>
          Accueil
        </button>

        <button
          className={`nav-item ${tab === 'chat' ? 'active' : ''}`}
          onClick={() => setTab('chat')}
        >
          <span className="nav-item-icon">💬</span>
          Jonathan Chat
        </button>

        <button
          className={`nav-item ${tab === 'config' ? 'active' : ''}`}
          onClick={() => setTab('config')}
        >
          <span className="nav-item-icon">⚙️</span>
          Configuration
        </button>

        <div className="sidebar-footer">
          <div className="sidebar-section">Modèle LLM</div>
          <div className="provider-select-wrap">
            <div className="provider-dot" />
            <select
              className="provider-select"
              value={provider}
              onChange={e => setProvider(e.target.value as typeof provider)}
            >
              {PROVIDERS.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      <main className="main">
        {tab === 'home'   && <HomePage onNavigate={setTab} />}
        {tab === 'chat'   && <ChatTab />}
        {tab === 'config' && <ConfigTab />}
      </main>
    </div>
  );
}
