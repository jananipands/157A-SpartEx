import {React, useState} from 'react';
import "./login.css";
import TextField from "@material-ui/core/TextField"
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Button } from "@mui/material";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';


function Login(){
    const lockStyle = {backgroundColor: 'goldenrod', margin: 'auto'};
    const[sjsuid, setSJSUID] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:9000/loginuser", {
                sjsuid: sjsuid, 
                password: password
            }).then((res) => {
                if(res.status >= 200 && res.status < 300){
                   console.log(res.data);
                   window.localStorage.setItem("sjsu_id", sjsuid);
                   navigate('/managelistings', {state: {id: sjsuid}});
                } else if (res.status === 401){
                    alert('Bad Credentials, please login again!');
                }
            });
            
        } catch (err){
            console.error('Something wrong login.js: ', err);
        }
    }

    return (
        <div className="background-div">
            <Paper elevation={10} className='login-paper-style'>
                <form onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={5} 
                        style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: 'black'}}>
                        <Grid item>
                            <Avatar style={lockStyle}>
                                <LockOpenOutlinedIcon style={lockStyle}/>
                            </Avatar>
                        </Grid>

                        <Grid item>
                            <Typography variant='h5' style={{fontWeight: 'bold', textAlign: "center"}}>Sign in</Typography>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="sjsuid-login"
                                label='SJSU ID' 
                                placeholder='Enter SJSU ID' 
                                fullWidth
                                variant="filled"
                                required
                                value={sjsuid}
                                onChange={(e) => {
                                    setSJSUID(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <TextField 
                                id="password-login"
                                label='Password'
                                placeholder='Enter password'
                                type='password'
                                variant="filled"
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <Link to="/createacct" style={{color: 'grey', textAlign: 'center', fontSize: 15}}
                            > Don't have an account? Create one here! </Link>
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
        
    );
}

export default Login;