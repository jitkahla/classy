import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignForm from './components/SignForm';
import Dashboard from './components/Dashboard';
import { LoginContext } from './login-context';
import ErrorPage from './components/ErrorPage';


const App = () => {

  const [login, setLogin] = useState(null);


  const logout = () => {
    setLogin(null);
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // put user details to login state
      setLogin(foundUser);
    }
  }, []);


  return (
    <LoginContext.Provider value={{login, setLogin, logout}}>
    {(login === null) ? <SignForm /> : <Dashboard />}
    </LoginContext.Provider>
  );
};


createRoot(
  document.querySelector('#app'),
).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='signform' element={<SignForm />}></Route>
      <Route path='dashboard' element={<Dashboard />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
