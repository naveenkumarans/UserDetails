import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import axios from 'axios';

import './Registration.css';

const Registration = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    } else {
      newErrors.password = '';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/registers', formData);

        if (response.status === 201) {
          setSnackbar({
            open: true,
            message: 'Registration successful!',
            severity: 'success',
          });
          setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });

          setTimeout(() => {
            onNavigateToLogin();
          }, 2000);
        } else {
          setSnackbar({
            open: true,
            message: 'Registration failed. Please try again.',
            severity: 'error',
          });
        }
      } catch (error) {
        console.error('Registration failed. Please try again.', error);
        setSnackbar({
          open: true,
          message: 'Registration failed. Please try again.',
          severity: 'error',
        });
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
        <h2>REGISTRATION</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <br/>
     
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
             <br/>
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
            <br/>
            
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
       
          <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: '20px' }}>
            Register
          </Button>
        </form>
        <br/>
        <div style={{  color: 'grey', textAlign: 'center',fontSize: '16px' }}>
  Already have an account?{' '}
  <Button onClick={onNavigateToLogin} color="secondary" sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '16px',color: '#ff69b4' }}>
    Login
  </Button>
</div>

      </div>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Registration;
