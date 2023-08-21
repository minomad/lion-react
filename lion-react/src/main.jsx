// import './styles/global.css';
import './styles/tailwind.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOMRoot { render, unmount }
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Virtual DOM (React Element Tree : React Created) */}
  </StrictMode>
);

// rendering → mount (DOM)
