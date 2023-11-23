import React, { useState, useEffect } from 'react';


import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Register";

function App() {
  const [activeForm, setActiveForm] = useState('registration');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavigateToLogin = () => {
    setActiveForm('login');
  };
  const handleNavigateToRegistration = () => {
    setActiveForm('registration');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setSnackbar({ open: true, message: 'Login successful', severity: 'success' });

    setTimeout(() => {
      setSnackbar({ ...snackbar, open: false });
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setSnackbar({ open: true, message: 'Logout successful', severity: 'success' });

    setTimeout(() => {
      setSnackbar({ ...snackbar, open: false });
    }, 5000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <>
            {activeForm === 'registration' && (
              <Registration onNavigateToLogin={handleNavigateToLogin} />
            )}
            {activeForm === 'login' && <Login onLogin={handleLogin} onNavigateToRegistration={handleNavigateToRegistration} />}
          </>
        )}
        {snackbar.open && (
          <div className="snackbar" onClick={handleCloseSnackbar}>
            {snackbar.message}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
