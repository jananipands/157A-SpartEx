import {
Card,
CardContent,
CardHeader,
Typography,
CardMedia,
Button,
Modal,
Box,
} from "@material-ui/core";
import ReactDOM from "react-dom";
import { useState } from "react";



const modal_style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 400,
    bgcolor: "background.paper",
    border: "3px solid grey",
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
};

function MoreInfoModal() {}

function Item(props) {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{height: '200px', width: '300px'}}>
            <Card sx={{ height: '200px', width: '300px' }}>
                <CardHeader title={props.Item_Name} />
                <CardMedia component="img" height="150" image={props.Image_URL} />

                <CardContent>
                    <Typography variant="body1">Price: {props.Price}</Typography>
                    <Typography varaint="body1">Condition: {props.Appearance}</Typography>
                    <Button variant="outlined" onClick={handleOpen}>More info</Button>
                    <Modal open={isOpen} onClose={handleClose} style={{height: 500, width: 500, position:'absolute', margin:'auto'}}>
                        <Box sx={modal_style}>
                            <Card sx={{ height: 450, width: 350 }}>
                                <CardHeader
                                    title={props.Item_Name}
                                    subheader={props.seller_name}
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

export default Item;