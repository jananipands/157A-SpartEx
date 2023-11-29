import {React, useState} from 'react';
import "./login.css";
import TextField from "@material-ui/core/TextField"
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Button, Stack } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { blue } from '@material-ui/core/colors';


function Login(){
    const lockStyle = {backgroundColor: 'goldenrod', margin: 'auto'};
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(username);

        // finish login logic here!
    }

    return (
        <Grid style={{backgroundColor:'white'}}>
            <Paper component={Stack} elevation={10} className='paper-style'>
                <form onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={5} 
                        style={{width: '100%', margin: 'auto'}}>
                        <Grid item>
                            <Avatar style={lockStyle}>
                                <LockOpenOutlinedIcon style={lockStyle}/>
                            </Avatar>
                        </Grid>

                        <Grid item>
                            <Typography variant='h5' style={{fontWeight: 'bold'}}>Sign in</Typography>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="username-login"
                                label='Username' 
                                placeholder='Enter username' 
                                fullWidth 
                                required
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <TextField 
                                id="password-login"
                                label='Password'
                                placeholder='Enter password'
                                type='password'
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
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
        </Grid>
    );
}

export default Login;