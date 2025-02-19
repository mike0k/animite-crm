import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MdAdd } from 'react-icons/md';

import IconButton from '@/Components/button/IconButton';

export default function ListHeader({ title, onAdd, btns = [] }) {
    const router = useRoute();
    return (
        <Paper elevation={2} sx={sx.container}>
            <Box sx={sx.left}>
                <Typography variant='h3' component='p'>
                    {title}
                </Typography>
            </Box>
            <Stack sx={sx.right} direction='row' spacing={2}>
                {btns}
                {onAdd && (
                    <IconButton onClick={onAdd}>
                        <MdAdd />
                    </IconButton>
                )}
            </Stack>
        </Paper>
    );
}

const sx = {
    container: {
        padding: '1rem',
        backgroundColor: '#ffffff',
        display: 'flex',
        marginBottom: '0.25rem',
    },
    left: {
        flexGrow: 1,
    },
    right: {
        flexGrow: 0,
    },
};
