import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from "@mui/material";
import UserNavbar from "../usernavbar/UserNavbar";
import "./addlisting.css";


function AddListing(){
    return (
        <div>
            <UserNavbar />
            <Typography variant='h4' className='si-text'style={{textAlign: 'center', marginTop: '4%', 
            marginBottom:'5%', color:'gray'}}>
                Select Item Type</Typography>
            <Grid container direction='row' spacing={5} className='al-grid' justifyContent='center'>
                <Grid item >
                    <Button href='/addappl' disableRipple style={{ height: '340px', 
                    width: '300px' , backgroundColor:'#0055A2'}}>
                        <Typography variant='body1' style={{ color: 'whitesmoke', marginLeft: '2px' }}>
                            Appliance</Typography>
                    </Button>
                </Grid>

                <Grid item>
                    <Button href='/addfurniture' disableRipple style={{ height: '340px', width: '300px' 
                    , backgroundColor:'#0055A2'}}>
                        <Typography variant='body1' style={{ color: 'whitesmoke', marginLeft: '2px' }}>
                            Furniture</Typography>
                    </Button>
                </Grid>

                <Grid item>
                    <Button href='/addtbook' disableRipple style={{ height: '340px', width: '300px' 
                     , backgroundColor:'#0055A2'}}>
                        <Typography variant='body1' style={{ color: 'whitesmoke', marginLeft: '2px' }}>
                            Textbook</Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );

}

export default AddListing;
