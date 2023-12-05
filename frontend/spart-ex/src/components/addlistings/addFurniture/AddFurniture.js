import { Grid, TextField, Typography, Paper } from '@material-ui/core';
import React, {useState} from 'react';
import "./addfurniture.css";
import { Button } from "@mui/material";
import UserNavbar from '../../usernavbar/UserNavbar';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function AddFurniture(){
    const navigate = useNavigate();
    const [furData, setFurData] = useState({
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
        setFurData((prevData) => ({ 
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(furData);

        try {
            const response = await axios.post("http://localhost:9000/addfurniture", {
                item_name: furData.item_name,
                image_url: furData.img_url,
                appearance: furData.condition,
                price: furData.price,
                details: furData.details,
                appearance_color: furData.color,
                seller_id: furData.seller_id
            }).then((res) => {
                console.log('request sent!')
                if(res.status >= 200 && res.status < 300){
                    navigate('/managelistings', {state: {id: furData.seller_id}});
                } else if (res.status === 401){
                    alert('Please enter information properly!');
                }
            });
            
        } catch (err){
            console.error('Something wrong addfurniture.js: ', err);
        }
    }


    return (
        <div className="ca-container">
            <UserNavbar />
            <div className="ca-text-div">
                <Typography variant='h4' align='center' className='ca-text'>List Furniture</Typography>
            </div>
            
            <Paper elevation={10} className="ca-paper-style">
                <form onSubmit={handleSubmit}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                className="input"
                                label="Item Name"
                                value={furData.item_name}
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
                                value={furData.img_url}
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
                                value={furData.price}
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
                                value={furData.condition}
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
                                value={furData.details}
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
                                value={furData.color}
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
                                value={furData.seller_id}
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

export default AddFurniture;