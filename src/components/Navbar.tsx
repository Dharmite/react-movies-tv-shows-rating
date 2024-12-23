import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { useEffect } from 'react';

const StyledAppBarButton = styled(Button)<{ component: typeof Link, to: string }>({
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        color: 'lightgray',
    },
});

export default function Navbar() {
    const navigate = useNavigate();
    const guest_session_id = localStorage.getItem('guest_session_id');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // Redirect to /auth if guest_session_id is undefined
    useEffect(() => {
        if (!guest_session_id || isLoggedIn === 'false') {
            navigate('/auth');
        }
    }, [guest_session_id, navigate, isLoggedIn]);

    return (
        <AppBar position="static" style={{ width: '100%' }}>
            <Toolbar>
                <StyledAppBarButton component={Link} to="/">
                    Home
                </StyledAppBarButton>
                <StyledAppBarButton component={Link} to="/rated">
                    Rated
                </StyledAppBarButton>
                <div style={{ flexGrow: 1 }}></div>
                {guest_session_id && isLoggedIn === 'true' ? (
                    <Button
                        color="inherit"
                        onClick={() => {
                            localStorage.setItem('isLoggedIn', 'false');
                            navigate('/auth');
                        }}
                    >
                        Logout
                    </Button>
                ) : (
                    <StyledAppBarButton component={Link} to="/auth">
                        Auth
                    </StyledAppBarButton>
                )}
            </Toolbar>
        </AppBar>
    );
}
