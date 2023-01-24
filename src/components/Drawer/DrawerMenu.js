import * as React from 'react';
import { Link as RouterLink } from "react-router-dom"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import "../../App.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MenuRouter from "../MenuRouter/MenuRouter"
import "./drawer.css"
import SelectSmall from './Select/Select';
import { useTranslation } from "react-i18next"


const drawerWidth = 240;
export default function DrawerMenu() {
    const { t } = useTranslation()

    return (
        <Box sx={{ display: 'flex' }}>
            <Typography className='positionTetx'>
                <SelectSmall />
            </Typography>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ boxShadow: "none" }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#363740",
                    },

                }}
                variant="permanent"
                anchor="left"
            >

                <Typography variant="h6" sx={{ paddingLeft: "20px", paddingTop: "20px", paddingBottom: "0", color: "#E5E5E5" }}>
                    <DonutLargeIcon />Muhammadaziz
                </Typography>
                <Toolbar />
                <Divider />
                <List>
                    {MenuRouter.map((text) => (
                        <ListItem
                            disablePadding
                            key={text.path}
                            component={RouterLink}
                            to={text.path}>

                            <ListItemButton sx={{ color: "#E5E5E5" }}>
                                <ListItemIcon>{text?.icon}</ListItemIcon>
                                {text?.title === "Product List" ?
                                    <ListItemText >{t("admin.menu.menu_category")}</ListItemText>
                                    : null || text?.title === "Product" ?
                                        <ListItemText >{t("admin.menu.menu_product")}</ListItemText>
                                        : null || text?.title === "Home" ? <ListItemText >{t("admin.menu.menu_home")}</ListItemText>: null}
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
}