import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import './Login.css';
import Box from '@mui/material/Box';

const Login = ({ onLogin, onNavigateToRegistration }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };


    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/authenticate', formData);

        console.log('Login Response:', response);

        if (response.status === 200) {
          localStorage.setItem('token', response.data);
          localStorage.setItem('email', formData.email);
          onLogin();
        } else {
          setErrorSnackbarOpen(true);
          setSnackbarMessage('Login failed. Please check your credentials and try again.');
        }
      } catch (error) {
        console.error('Login Error:', error);

        setErrorSnackbarOpen(true);
        setSnackbarMessage('Login failed. Please check your credentials and try again.');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="form-container">
      <div className="form-content">
      <h2>LOGIN</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
          </div>
          <br />
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Login
          </Button>
        </form>
        <Snackbar
          open={errorSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          color="error"
        />
       <br/>
        <div style={{  color: 'grey', textAlign: 'center',fontSize: '16px' }}>
        Don't have an account?{' '}
  <Button onClick={onNavigateToRegistration} color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '16px',color: '#ff69b4' }}>
    Register
  </Button>
</div>

      </div>
    </Box>
  );
};

export default Login;
