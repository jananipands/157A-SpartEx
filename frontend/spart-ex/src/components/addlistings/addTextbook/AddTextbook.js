import { Grid, TextField, Typography, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import "./addtextbook.css";
import { Button } from "@mui/material";
import UserNavbar from '../../usernavbar/UserNavbar';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function AddTextbook() {
    const [tbookData, setTbookData] = useState({
        item_name: '',
        item_id: null, // generate later 
        img_url: '',
        condition: '',
        price: '',
        color: '',
        details: '',
        seller_id: ''
    });

    const navigate = useNavigate();

    // ... takes prevData and spreads it
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setTbookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(tbookData);

        try {
            const response = await axios.post("http://localhost:9000/addtextbook", {
                item_name: tbookData.item_name,
                image_url: tbookData.img_url,
                appearance: tbookData.condition,
                price: tbookData.price,
                details: tbookData.details,
                appearance_color: tbookData.color,
                seller_id: tbookData.seller_id
            }).then((res) => {
                console.log('request sent!')
                if(res.status >= 200 && res.status < 300){
                    navigate('/managelistings', {state: {id: tbookData.seller_id}});
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
                <Typography variant='h4' align='center' className='ca-text'>List a Textbook</Typography>
            </div>

            <Paper elevation={10} className="ca-paper-tbook">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} style={{ display: 'flex', margin: 'auto', flexWrap: "nowrap", padding: 10, width: '100%'}}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Textbook Name"
                                    value={tbookData.item_name}
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
                                    label="Textbook Image"
                                    value={tbookData.img_url}
                                    name="img_url"
                                    onChange={handleFormChange}
                                    placeholder='URL'
                                    fullWidth
                                    required
                                    size="small"
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Textbook Price"
                                    value={tbookData.price}
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
                                    label="Textbook Condition"
                                    type="text"
                                    value={tbookData.condition}
                                    name="condition"
                                    onChange={handleFormChange}
                                    placeholder='Excellent, Good, Fair'
                                    fullWidth
                                    required
                                    size="small"
                                />
                            </Grid>

                            <Grid item >
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Description"
                                    value={tbookData.details}
                                    name="details"
                                    onChange={handleFormChange}
                                    fullWidth
                                    required
                                    size="small"
                                    multiline
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Seller SJSU ID"
                                    value={tbookData.seller_id}
                                    name="seller_id"
                                    onChange={handleFormChange}
                                    placeholder='Enter your 9-digit SJSU ID'
                                    fullWidth
                                    required
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Button variant="contained"
                        type="submit"
                        disableRipple
                        fullWidth
                        color="primary"
                        style={{ marginTop: 15, marginBottom: 5}}>
                        Add
                    </Button>

                </form>
            </Paper>
        </div>
    )
}

export default AddTextbook;