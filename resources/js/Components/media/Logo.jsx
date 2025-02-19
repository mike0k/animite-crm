import { Link } from '@inertiajs/react';

import Box from '@mui/material/Box';

import Img from '@/Components/media/Img';

export default function Nav() {
    return (
        <Box sx={sx.container}>
            <Box component={Link} href='/' sx={sx.link}>
                <Img src='logo/icon.png' alt='Logo' sx={sx.img} />
            </Box>
        </Box>
    );
}

const sx = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 3rem auto',
    },
    link: {
        backgroundColor: 'primary.main',
        border: 3,
        borderColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        height: '8rem',
        width: '8rem',
        transition: 'all 0.3s ease-in',
        '&:hover': {
            backgroundColor: 'primary.light',
            img: {
                transform: 'scale(1)',
            },
        },
    },
    img: {
        maxWidth: '7rem',
        transform: 'scale(0.8)',
        transition: 'all 0.3s ease-in',
    },
};
