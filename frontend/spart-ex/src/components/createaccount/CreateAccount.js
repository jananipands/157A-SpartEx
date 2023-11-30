import { Grid, TextField, Typography, Paper } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import "./createaccount.css";
import { Button } from "@mui/material";

function CreateAccount(){
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        password: '',
        sjsu_id: '',
        phone_number: '',
        insta_id: '',
        messenger_id: '',
    });

    // ... takes prevData and spreads it
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ 
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(userData);

        // pass data to backend database (Create)
    }


    return (
        <div className="ca-container">
            <div className="ca-text-div">
                <Typography variant='h4' align='center' className='ca-text'>Welcome, Spartan!</Typography>
                <Typography variant='body1' align='center' style={{color: 'grey'}}>
                    Tell us a little more about yourself.</Typography>
            </div>
            
            <Paper elevation={10} className="ca-paper-style">
                <form onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Typography variant="h6" style={{textAlign: 'center'}}>Personal Information</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="First Name"
                                value={userData.first_name}
                                name="first_name"
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Last Name"
                                value={userData.last_name}
                                name="last_name"
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="SJSU ID"
                                value={userData.sjsu_id}
                                name="sjsu_id"
                                placeholder='Enter your 9-digit SJSU ID'
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Password"
                                type="password"
                                value={userData.password}
                                name="password"
                                onChange={handleFormChange}
                                placeholder='Create a password'
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style={{textAlign: 'center'}}>Contact Information</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Phone Number"
                                value={userData.phone_number}
                                name="phone_number"
                                onChange={handleFormChange}
                                placeholder="XXX-XXX-XXXX"
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Instagram ID"
                                value={userData.insta_id}
                                name="insta_id"
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Messenger ID"
                                value={userData.messenger_id}
                                name="messenger_id"
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" 
                            type="submit" 
                            disableRipple
                            fullWidth
                            color="primary">
                                Sign in
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export default CreateAccount;