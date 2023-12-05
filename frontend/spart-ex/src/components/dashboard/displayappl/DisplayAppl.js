import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from "@mui/material";
import UserNavbar from '../../usernavbar/UserNavbar';

import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Item from '../../item/Item';
import { useState, useEffect} from 'react';
import axios from 'axios';


function DisplayAppl(props) {
    const data = [];
    const [appl_items, setApplItems] = useState([]);

    useEffect(() => {
        const getAppliance = async (e) => {
            const response = await axios.get('http://localhost:9000/getappliance').then((res) => {
                setApplItems([...res.data]);
            })
        }

        getAppliance();
    }, []);

    

    const appliances = appl_items.map(item => <Item key={item.item_id} {...item} />);

    
    return (
        <div>
            <UserNavbar id={props.id}/>
            <Grid container spacing={4} style={{ marginTop:'5%', marginInline:'5% 5%'}}>
                {appliances.map((itemComponent, index) => (
                    <Grid item key={index} style={{marginBottom:'10%'}}>
                        {itemComponent}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default DisplayAppl;