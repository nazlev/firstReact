import {React, createElement} from 'react';
// import {ReactDOM} from 'react-dom/client';
import App from './App.js';
import './styles/App.css'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
