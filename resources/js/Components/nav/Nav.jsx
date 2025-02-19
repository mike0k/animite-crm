import React from 'react';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

import Box from '@mui/material/Box';

import Button from '@/Components/button/Button';
import Logo from '@/Components/media/Logo';

export default function Nav() {
    const [open, setOpen] = React.useState(false);

    const onClick = (item) => {
        setOpen(open === item ? false : item);
    };

    return (
        <Box sx={sx.container}>
            <Box sx={sx.header}>
                <Logo />
            </Box>

            <Box sx={sx.nav1}>
                <Button sx={[sx.btn, sx.btn1]} size='large'>
                    Search
                </Button>
                <Btn route='project.index'>Projects</Btn>
                <Btn route='client.index'>Clients</Btn>
                <Btn route='rate.index'>Rates</Btn>
                <Btn route='user.index'>Users</Btn>

                <Box sx={[sx.group, open === 'dev' && sx.groupOpen]}>
                    <Button sx={[sx.btn, sx.btn1]} onClick={() => onClick('dev')}>
                        Developer Tools
                    </Button>
                    <Box sx={[sx.nav2, open === 'dev' && sx.nav2Open]}>
                        <Btn route='site.index'>Error Log: Cron</Btn>
                        <Btn route='site.index'>Error Log: Dash</Btn>
                        <Btn route='site.index'>Crons</Btn>
                        <Btn route='site.index'>Task Que</Btn>
                        <Btn route='site.index'>Access Manager</Btn>
                        <Btn route='site.index'>Login Log</Btn>
                    </Box>
                </Box>

                <Btn route='logout'>Logout</Btn>
            </Box>
        </Box>
    );
}

function Btn({ route, children, lvl = 1 }) {
    const router = useRoute();

    return (
        <Button
            href={router(route)}
            component={Link}
            sx={[sx.btn, lvl === 1 && sx.btn1, lvl === 2 && sx.btn2]}>
            {children}
        </Button>
    );
}

const navWidth = '15rem';

const sx = {
    container: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: navWidth,
        overflow: 'hidden',
        transition: 'all 0.5s ease-in-out',
        backgroundColor: '#222222',
    },
    header: {
        paddingTop: '2rem',
        textAlign: 'center',
    },
    btn: {
        width: '100%',
        borderRadius: 0,
        justifyContent: 'start',
        marginBottom: '0.25rem',
        backgroundColor: 'transparent',
        boxShadow: 'none !important',
        padding: '0.5rem 1.5rem',
        fontSize: '0.938rem',
    },
    btn1: {
        '&:hover': {
            backgroundColor: '#121212',
        },
    },
    btn2: {
        '&:hover': {
            color: 'primary.main',
        },
    },
    nav2: {
        paddingLeft: '1rem',
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'all 0.2s linear',
    },
    groupOpen: {
        backgroundColor: '#121212',
    },
    nav2Open: {
        maxHeight: '50rem',
    },
};
