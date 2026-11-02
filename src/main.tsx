//imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Не найден элемент #root для запуска приложения');
}
//function that rendering main component 'App' in sctrict mode
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
