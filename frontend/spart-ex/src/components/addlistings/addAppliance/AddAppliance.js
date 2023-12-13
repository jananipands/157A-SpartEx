import { Grid, TextField, Typography, Paper } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import "./addappliance.css";
import { Button } from "@mui/material";
import UserNavbar from '../../usernavbar/UserNavbar';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function AddAppliance(){
    const navigate = useNavigate();
    const [applData, setApplData] = useState({
        item_name: '',
        item_id: null,
        img_url: '',
        condition: '',
        price: '',
        details: '',
        color: '',
        seller_id: ''
    });

    // ... takes prevData and spreads it
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setApplData((prevData) => ({ 
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:9000/addappliance", {
                item_name: applData.item_name,
                image_url: applData.img_url,
                appearance: applData.condition,
                price: applData.price,
                details: applData.details,
                appearance_color: applData.color,
                seller_id: applData.seller_id
            }).then((res) => {
                console.log('request sent!')
                if(res.status >= 200 && res.status < 300){
                    navigate('/managelistings', {state: {id: applData.seller_id}});
                } else if (res.status === 401){
                    alert('Please enter information properly!');
                }
            });
            
        } catch (err){
            console.error('Something wrong addappliance.js: ', err);
        }
        // pass data to backend database (Create)
    }


    return (
        <div className="ca-container">
            <UserNavbar id={applData.id}/>
            <div className="ca-text-div">
                <Typography variant='h4' align='center' className='ca-text'>List an Appliance</Typography>
            </div>
            
            <Paper elevation={10} className="ca-paper-style">
                <form onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Item Name"
                                value={applData.item_name}
                                name="item_name"
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
                                label="Item Image"
                                value={applData.img_url}
                                name="img_url"
                                onChange={handleFormChange}
                                placeholder='URL'
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Item Price"
                                value={applData.price}
                                name="price"
                                placeholder='$XX.XX'
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
                                label="Item Condition"
                                type="text"
                                value={applData.condition}
                                name="condition"
                                onChange={handleFormChange}
                                placeholder='Excellent, Good, Fair'
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                       
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Item Description"
                                value={applData.details}
                                name="details"
                                onChange={handleFormChange}
                                fullWidth
                                required
                                size="small"
                                multiline
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Item Color"
                                value={applData.color}
                                name="color"
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
                                label="Seller SJSU ID"
                                value={applData.seller_id}
                                name="seller_id"
                                onChange={handleFormChange}
                                placeholder='Enter your 9-digit SJSU ID'
                                fullWidth
                                required
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" 
                                type="submit" 
                                disableRipple
                                fullWidth
                                color="primary"
                                style={{marginTop: 15, marginBottom: 5}}>
                                   Add
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export default AddAppliance;