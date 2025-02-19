import { Link } from '@inertiajs/react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Logo from '@/Components/media/Logo';
import ReduxProvider from '@/store/Provider';
import Theme from './Theme';

export default function GuestLayout({ children }) {
    return (
        <ReduxProvider>
            <Theme>
                <Container sx={sx.container}>
                    <Box sx={sx.content}>
                        <Logo />
                        {children}
                    </Box>
                </Container>
            </Theme>
        </ReduxProvider>
    );
}

const sx = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        minWidth: '25rem',
    },
};
