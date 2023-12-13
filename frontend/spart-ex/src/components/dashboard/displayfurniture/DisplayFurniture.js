import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import UserNavbar from '../../usernavbar/UserNavbar';
import Item from '../../item/Item';
import { useState, useEffect} from 'react';
import axios from 'axios';

function DisplayFurniture(props) {
    const dummyData = [];
    const [fur_items, setFurItems] = useState([]);

    useEffect(() => {
        const getFurniture = async (e) => {
            const response = await axios.get('http://localhost:9000/getfurniture').then((res) => {
                setFurItems([...res.data]);
            })
        }

        getFurniture();
    }, []);

    console.log(fur_items);
    
    const furniture = fur_items.map(item => <Item key={item.item_id} {...item} />);

    
    return (
        <div>
            <UserNavbar id={props.id}/>
            <Grid container spacing={4} style={{ marginTop:'5%', marginInline:'5% 5%'}}>
                {furniture.map((itemComponent, index) => (
                    <Grid item key={index} style={{marginBottom:'10%'}}>
                        {itemComponent}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default DisplayFurniture;