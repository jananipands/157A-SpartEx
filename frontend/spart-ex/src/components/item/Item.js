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

const props = {
    item_name: "Database Management Systems Textbook",
    image_url:
        "https://m.media-amazon.com/images/I/51YWpyc3SjL._AC_UF1000,1000_QL80_.jpg",
    appearance: "Great",
    price: "$30.00",
    subject: "Database Management Systems",
    details: "This is a textbook that is used for CS 157A.",
    seller_id: "014651949",
    seller_name: "Janani Pandurangan",
    seller_contact: "@janani.pandu",
};

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
                <CardHeader title={props.item_name} subheader={props.seller_name} />
                <CardMedia component="img" height="150" image={props.img_url} />

                <CardContent>
                    <Typography variant="body1">Price: {props.price}</Typography>
                    <Typography varaint="body1">Condition: {props.condition}</Typography>
                    <Button variant="outlined" onClick={handleOpen}>More info</Button>
                    <Modal open={isOpen} onClose={handleClose} style={{height: 500, width: 500, position:'absolute', margin:'auto'}}>
                        <Box sx={modal_style}>
                            <Card sx={{ height: 450, width: 350 }}>
                                <CardHeader
                                    title={props.item_name}
                                    subheader={props.seller_name}
                                />
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={props.image_url}
                                    />

                                    <Typography variant="body1" style={{ marginTop: 10 }}>
                                        <strong>Price</strong>: {props.price}
                                    </Typography>

                                    <Typography variant="body1" style={{ overflowWrap: "normal" }}>
                                        Details: {props.details}
                                    </Typography>

                                    <Typography varaint="body1">
                                        Condition: {props.condition}
                                    </Typography>

                                    <Typography variant="body2" style={{ marginTop: 10 }}>
                                        Seller: {props.seller_name}
                                    </Typography>

                                    <Typography variant="body2">
                                        Seller Contact: {props.seller_contact}
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