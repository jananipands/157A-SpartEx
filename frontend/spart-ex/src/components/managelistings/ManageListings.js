import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from "@mui/material";
import UserNavbar from "../usernavbar/UserNavbar";
import Item from "../item/Item";
import AddIcon from '@mui/icons-material/Add';
import UserItem from '../useritems/UserItem';


function ManageListings(){
    // implement functionality to get user id if they are logged in
    const user_id = "016384939";

    const items = [ {
            item_name: 'Sofa',
            item_id: 1,
            img_url: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-lejde-light-gray__0992909_pe820327_s5.jpg",
            condition: "Great",
            price: "$150.00",
            details: "A comfortable sofa for your living room.",
            color: "Brown",
            seller_id: "016384939"
        }, {
            item_name: 'Microwave',
            item_id: 2,
            img_url: "https://www.ikea.com/us/en/images/products/medelniva-over-the-range-microwave-stainless-steel__0852294_pe780009_s5.jpg?f=s",
            condition: "Fair",
            price: "$200.50",
            details: "A reliable microwave for your kitchen.",
            color: "Silver",
            seller_id: "339020488"
        }
    ];

    const userListings = items.filter(item => item.seller_id === user_id);
    const listingItems = userListings.map(listing => <UserItem{...listing}/>);

    return(
        <div className="ml-container">
            <UserNavbar />
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