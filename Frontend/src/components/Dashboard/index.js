import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import Box from '@mui/material/Box';

const Dashboard = ({ onLogout }) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
    phoneNumber: '',
  });

  const [isEditMode, setEditMode] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
       
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/v1/user/${localStorage.getItem('email')}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditClick = () => {
    
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:8080/api/v1/user/edit/${localStorage.getItem('email')}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      setEditMode(false);
      setSnackbarOpen(true);
      setSnackbarMessage('User details updated successfully.');
    } catch (error) {
      console.error('Error updating user details:', error);
      setSnackbarOpen(true);
      setSnackbarMessage('Failed to update user details. Please try again.');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChange = (field) => (event) => {
    setUser({ ...user, [field]: event.target.value });
  };

  return (
    <Box className="form-container">
    <div className="form-content">
    <div>
      <h2>Welcome, {user.name}!</h2>
      <Button variant="contained" color="secondary" onClick={onLogout}>
        Logout
      </Button>
      <br />
      <br />
      <TextField label="Name" value={user.name} disabled={!isEditMode} onChange={handleChange('name')} />
      <br />
      <br />
      <TextField label="Age" value={user.age} disabled={!isEditMode} onChange={handleChange('age')} />
      <br />
      <br />
      <TextField label="Gender" value={user.gender} disabled={!isEditMode} onChange={handleChange('gender')} />
      <br />
      <br />
      <TextField label="Date of Birth" value={user.dob} disabled={!isEditMode} onChange={handleChange('dob')} />
      <br />
      <br />
      <TextField label="Phone Number" value={user.phoneNumber} disabled={!isEditMode} onChange={handleChange('phoneNumber')} />
      <br />
      <br />
      {isEditMode ? (
        <Button variant="contained" color="secondary" onClick={handleSaveClick}>
          Save
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleEditClick}>
          Edit
        </Button>
      )}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} message={snackbarMessage} />
    </div>
    </div>
    </Box>
  );
};

export default Dashboard;
