import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Item from '../../item/Item';
import UserNavbar from '../../usernavbar/UserNavbar';

function DisplayTextbook() {
    const dummyData = [];
    const item_type = 'T';

    for (let i = 1; i <= 50; i++) {
        const type = i % 3 === 0 ? 'A' : (i % 3 === 1 ? 'F' : 'T');

        const dummyObject = {
            item_name: `Item ${i}`,
            item_id: i,
            type,
            img_url: `https://www.example.com/image${i}.jpg`,
            condition: i % 3 === 0 ? 'Fair' : (i % 3 === 1 ? 'Great' : 'Poor'),
            price: `$${(Math.random() * 500).toFixed(2)}`,
            details: `Details for Item ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            color: i % 2 === 0 ? 'Silver' : 'Brown',
            seller_id: `SJSU${i}`
        };

        dummyData.push(dummyObject);
    }

    const listItems = dummyData.filter(item => item.type === item_type);
    const textbooks = listItems.map(item => <Item key={item.item_id} {...item} />);

    
    return (
        <div>
            <UserNavbar />
            <Grid container spacing={4} style={{ marginTop:'5%', marginInline:'7% 5%'}}>
                {textbooks.map((itemComponent, index) => (
                    <Grid item key={index} style={{marginBottom:'10%'}}>
                        {itemComponent}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default DisplayTextbook;