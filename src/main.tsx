import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProviderContextProvider } from './context/ProviderContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderContextProvider>
      <App />
    </ProviderContextProvider>
  </StrictMode>,
);
