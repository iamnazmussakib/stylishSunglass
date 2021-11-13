import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders'
import useAuth from '../../../hooks/useAuth'
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAProduct from '../AddAProduct/AddAProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/my-orders`}><Button sx={{ width: '100%', mt: 5, mb: 1 }} color="secondary" variant="outlined">My Orders</Button></Link>}

            {!admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/payment`}><Button sx={{ width: '100%', my: 1 }} color="secondary" variant="outlined">Payment</Button></Link>}

            {!admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/review`}><Button sx={{ width: '100%', mb: 5, mt: 1 }} color="secondary" variant="outlined">Review</Button></Link>}

            {admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/manage-orders`}><Button sx={{ width: '100%', mt: 5, mb: 1 }} color="secondary" variant="outlined">Manage All Orders</Button></Link>}

            {admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/manage-products`}><Button sx={{ width: '100%', my: 1 }} color="secondary" variant="outlined">Manage All Pruducts</Button></Link>}

            {admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/add-product`}><Button sx={{ width: '100%', my: 1 }} color="secondary" variant="outlined">Add A Product</Button></Link>}

            {admin && <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`${url}/make-admin`}><Button sx={{ width: '100%', mb: 5, mt: 1 }} color="secondary" variant="outlined">Make Admin</Button></Link>}

            <Divider />

            <Link style={{ textDecoration: 'none', color: '#1976D2', }} to={`/`}><Button sx={{ width: '100%', mt: 5, mb: 1 }} color="secondary" variant="outlined">Back To Home</Button></Link>

            <Button onClick={logOut} sx={{ width: '100%', my: 1 }} color="secondary" variant="outlined">LogOut</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: '#9C27B0' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    {!admin && <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>}
                    {!admin && <Route path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>}
                    {!admin && <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>}
                    {!admin && <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>}
                    {admin && <AdminRoute exact path={path}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>}
                    {admin && <AdminRoute path={`${path}/manage-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>}
                    {admin && <AdminRoute path={`${path}/add-product`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>}
                    {admin && <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>}
                    {admin && <AdminRoute path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>}
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
