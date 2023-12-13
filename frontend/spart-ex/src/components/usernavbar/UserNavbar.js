import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import {Grid} from "@mui/material";

function UserNavbar(props) {
   
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenSettingsMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "white" }}>
            <Toolbar>
                <img src={require('./logo-white.png')} style={{ width: 184, height: 60 }} />
                <Grid container direction='row' spacing={2} style={{marginLeft: '10%', marginRight:'10%',justifyContent:'space-between'}}>
                        <Grid item>
                            <Typography variant='body1'>
                                <Link  to={{pathname: "/appliances",
                                    state:{id: props.id}}} style={{color: '#464646', textDecoration:'none'}}>
                                    <span>Appliances</span>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                <Link to={{pathname: "/furniture",
                                    state:{id: props.id}}} style={{color: '#464646', textDecoration:'none'}}>
                                    Furniture
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                <Link  to={{pathname: "/textbooks",
                                    state:{id: props.id}}} style={{color: '#464646', textDecoration:'none'}}>
                                    Textbooks
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
               
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open my_settings">
                        <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                            <AccountCircleIcon
                                style={{ backgroundColor: "white", color: "#0055A2" }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "55px", width: "300px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseSettingsMenu}
                    >
                        <MenuItem key="manage_listing" onClick={handleCloseSettingsMenu}>
                            <EditIcon style={{backgroundColor: "white", color: "gray"}}/>
                            <Link to="/managelistings" style={{
                                textAlign: "center",
                                color: "gray",
                                textDecoration: "none",
                                marginLeft: 5
                            }}>
                                Manage Listings</Link>
                        </MenuItem>

                        <MenuItem key="logout" onClick={handleCloseSettingsMenu}>
                            <LogoutIcon style={{backgroundColor: "white", color: "gray"}}/>
                            <Link to="/" style={{textAlign: "center", color: "gray", 
                            textDecoration: "none", marginLeft: 5}}>Logout</Link>
                        </MenuItem>
                    </Menu>
                </Box>
                
                
            </Toolbar>
        </AppBar>
    );
}
export default UserNavbar;