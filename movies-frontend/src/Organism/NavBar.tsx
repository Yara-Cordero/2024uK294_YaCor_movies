import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();

        navigate("/login");
    }

    return (
        <AppBar position="fixed" className='navbar' sx={{backgroundColor: "#404040"}}>
            <Toolbar>
                <Button onClick={() => navigate("/movies/create")}>Create</Button>
                <Button onClick={() => navigate("/movies")}>Home</Button>
                <Button onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
