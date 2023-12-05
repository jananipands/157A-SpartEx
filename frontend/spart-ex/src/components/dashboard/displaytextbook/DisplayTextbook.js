import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Item from '../../item/Item';
import UserNavbar from '../../usernavbar/UserNavbar';
import { useState, useEffect} from 'react';
import axios from 'axios';

function DisplayTextbook(props) {
    const dummyData = [];
    const [tb_items, setTbItems] = useState([]);

    useEffect(() => {
        const getTextbooks = async (e) => {
            const response = await axios.get('http://localhost:9000/gettextbook').then((res) => {
                setTbItems([...res.data]);
            })
        }

        getTextbooks();
    }, []);

    const textbooks = tb_items.map(item => <Item key={item.item_id} {...item} />);

    
    return (
        <div>
            <UserNavbar id={props.id}/>
            <Grid container spacing={4} style={{ marginTop:'5%', marginInline:'5% 5%'}}>
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