import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignForm from './components/SignForm';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const App = () => {

  return (
    <SignForm />
  );
};


createRoot(
  document.querySelector('#app'),
).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path='signform' element={<SignForm />}></Route>
      <Route path='dashboard' element={<Dashboard />}></Route>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
