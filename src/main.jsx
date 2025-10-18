import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { useAuthStore } from './stores/authStore';

// Initialize auth session (Supabase or mock) once at app start
try {
  useAuthStore.getState().initialize();
} catch (e) {
  // no-op
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>

  </StrictMode>,
);