import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    CardMedia,
    Button,
    Modal,
    Box,
    Tooltip,
    IconButton,
} from "@material-ui/core";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


const modal_style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 400,
    bgcolor: "background.paper",
    border: "3px solid grey",
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
};

const handleDelete = async (props) => {
    try {
      const response = await axios.post('http://localhost:9000/deletelisting', {
        seller_id: props.Seller_ID,
        item_id: props.Item_ID,
      });
  
      if (response.status >= 200 && response.status <= 300) {
        console.log('Deleted Successfully!');
        props.onDelete(props.Item_ID);
      } else if (response.status === 401) {
        alert('Cannot delete item!');
      }
    } catch (err) {
      console.log(err);
    }
};


  

function ItemTitle(props){
    const data = {
        item_id: props.Item_ID,
        item_name: props.Item_Name,
        img_url: props.Image_URL,
        condition: props.Appearance,
        price: props.Price,
        details: props.Details,
        color: props.Appearance_Color,
        seller_id: props.Seller_ID,
    };

    return (
        <div style={{display:'flex', justifyContent:'space-between', 
        verticalAlign:'baseline'}}>
            <Typography variant="h5" style={{marginTop:'7px', textOverflow:'ellipsis'}}>{props.Item_Name}</Typography>
            <Box>
                <Tooltip title="Edit">
                    <Link to='/updatelisting' state={{item_data: data}}>
                        <IconButton>
                            <EditIcon style={{backgroundColor: 'white', color: 'gray', marginTop:'0px'}}/>
                        </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(props)}>
                        <DeleteIcon style={{backgroundColor: 'white', color: 'red', marginTop:'0px'}}/>
                    </IconButton>
                </Tooltip>
            </Box>
        </div>
    );
}




function UserItem(props) {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ height: '200px', width: '300px' }}>
            <Card sx={{ height: '200px', width: '300px' }}>
                <CardHeader title={<ItemTitle{...props}/>} />
                <CardMedia component="img" height="150" image={props.Image_URL} />

                <CardContent>
                    <Typography variant="body1">Price: {props.Price}</Typography>
                    <Typography varaint="body1">Condition: {props.Appearance}</Typography>
                    <Button variant="outlined" onClick={handleOpen}
                    
                    style={{marginTop:'5px'}}>More info</Button>
                    <Modal open={isOpen} onClose={handleClose} style={{ height: 500, width: 500, position: 'absolute', margin: 'auto' }}>
                        <Box sx={modal_style}>
                            <Card sx={{ height: 450, width: 350 }}>
                                <CardHeader
                                    title={props.Item_Name}
                                />
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={props.Image_URL}
                                    />

                                    <Typography variant="body1" style={{ marginTop: 10 }}>
                                        <strong>Price</strong>: {props.Price}
                                    </Typography>

                                    <Typography variant="body1" style={{ overflowWrap: "normal" }}>
                                        Details: {props.Details}
                                    </Typography>

                                    <Typography varaint="body1">
                                        Condition: {props.Appearance}
                                    </Typography>

                                    <Typography variant="body2" style={{ marginTop: 10 }}>
                                        Seller: {props.Seller_ID}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Box>
                    </Modal>
                </CardContent>
            </Card>
        </div>

    );
}

export default UserItem;