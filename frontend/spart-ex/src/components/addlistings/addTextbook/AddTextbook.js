import { Grid, TextField, Typography, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import "./addtextbook.css";
import { Button } from "@mui/material";
import UserNavbar from '../../usernavbar/UserNavbar';


function AddTextbook() {
    const [tbookData, setTbookData] = useState({
        item_name: '',
        item_id: null, // generate later 
        img_url: '',
        condition: '',
        price: '',
        details: '',
        subject: '',
        author: '',
        edition: '',
        isbn: '',
        seller_id: ''
    });

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

        // pass data to backend database (Create)
    }


    return (
        <div className="ca-container">
            <UserNavbar />
            <div className="ca-text-div">
                <Typography variant='h4' align='center' className='ca-text'>List a Textbook</Typography>
            </div>

            <Paper elevation={10} className="ca-paper-tbook">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} style={{ display: 'flex', margin: 'auto', flexWrap: "nowrap", padding: 10, width: 'auto'}}>
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

                        <Grid container direction='column' spacing={2} style={{width:'60%', height: 'auto', alignItems:  "center"}}>
                            <Grid item>
                                <Typography variant="h6">More Information</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Subject/Course"
                                    value={tbookData.subject}
                                    name="subject"
                                    onChange={handleFormChange}
                                    fullWidth
                                    required
                                    size="small"
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Author"
                                    value={tbookData.author}
                                    name="author"
                                    onChange={handleFormChange}
                                    fullWidth
                                    required
                                    size="small"
                                    placeholder='List the first author'
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    variant="outlined"
                                    className="input"
                                    label="Edition"
                                    value={tbookData.edition}
                                    name="edition"
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
                                    label="ISBN Number"
                                    value={tbookData.isbn}
                                    name="isbn"
                                    onChange={handleFormChange}
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
                        style={{ marginTop: 15, marginBottom: 5 }}>
                        Add
                    </Button>

                </form>
            </Paper>
        </div>
    )
}

export default AddTextbook;