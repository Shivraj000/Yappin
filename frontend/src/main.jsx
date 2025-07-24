import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';


const reactElement = (
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
     <App />
     </SocketContextProvider>
     </AuthContextProvider>
    </BrowserRouter>
   
  </StrictMode>
);

console.log(React.version); 

createRoot(document.getElementById('root')).render(reactElement);
