import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProviderContextProvider } from './context/ProviderContext.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <ProviderContextProvider>
        <App />
      </ProviderContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
