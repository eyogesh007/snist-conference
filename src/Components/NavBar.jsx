import React from 'react';
import {
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
    AppBar,
    Toolbar, IconButton, Button
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Quicklinks', 'Registration', 'Publication', 'Program', 'Venue', 'Contact'];


function NavBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Conference
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton component={Link} to={item === 'Home' ? "" : item.toLowerCase()}
                                        sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav" position="relative" color="default" sx={{boxShadow: 0}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon sx={{paddingRight: "10px"}}/>
                    </IconButton>
                    <Typography variant="h6" sx={{mr: 2, display: {sm: 'none'}}}>SNIST CONFERENCE</Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        SNIST CONFERENCE
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Link to={item === 'Home' ? "" : item.toLowerCase()}>
                                <Button key={item}>
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

export default NavBar;