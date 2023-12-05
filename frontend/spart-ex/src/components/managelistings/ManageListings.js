import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from "@mui/material";
import UserNavbar from "../usernavbar/UserNavbar";
import Item from "../item/Item";
import AddIcon from '@mui/icons-material/Add';
import UserItem from '../useritems/UserItem';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function ManageListings(props){
    const [items, setItems] = useState([]);

    let user_id = window.localStorage.getItem("sjsu_id");

    const getItems = () => {
        axios.get(`http://localhost:9000/getuseritems`).then((res) => {
            setItems([...res.data]);
        })
    }

    // backend to-do: retrieve User's listed items from SQL textbook, appliances, and furniture databases and send over here
    // save as an array of JSON objects

    let listingItems = [];

    if(items !== null){
        listingItems = items.map(listing => <UserItem{...listing}/>);
    }

    

    return(
        <div className="ml-container">
            <UserNavbar id={user_id}/>
            <Grid container spacing={4} style={{margin: '5%'}}>
                <Grid item>
                    <Button href='/addlisting' style={{height: '350px', width: '300px'}}>
                        <AddIcon style={{backgroundColor:'white', color:'gray'}}/>
                        <Typography variant='body1' style={{color: 'gray', marginLeft: '2px'}}>
                            Add Listing</Typography>
                    </Button>
            
                </Grid>
                {listingItems.map((itemComponent, index) => (
                    <Grid item key={index}>
                        {itemComponent}
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ManageListings;