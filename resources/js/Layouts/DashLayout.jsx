import { usePage } from '@inertiajs/react';
import { SnackbarProvider } from 'notistack';

import Box from '@mui/material/Box';

import ReduxProvider from '@/store/Provider';
import Date from './Date';
import Theme from './Theme';
import Nav from '@/Components/nav/Nav';
import Notify from '@/Components/notify/Notify';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <ReduxProvider>
            <Date>
                <Notify>
                    <Theme>
                        <Box sx={sx.page}>
                            <Nav />
                            <Box sx={sx.content}>{children}</Box>
                        </Box>
                    </Theme>
                </Notify>
            </Date>
        </ReduxProvider>
    );
}

const sx = {
    page: {
        transition: 'all 0.5s ease-in-out',
        position: 'relative',
        minHeight: '100vh',
    },
    content: {
        minHeight: '100vh',
        //padding: '1rem',
        marginLeft: '15rem',
    },
};
