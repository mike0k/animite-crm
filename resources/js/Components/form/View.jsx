import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function View({ title, value, onClick = false }) {
    return (
        <Box sx={[sx.container, onClick && sx.click]} onClick={onClick}>
            <Typography variant='body2' component='p'>
                {title}
            </Typography>
            <Typography>{value ? value : '-'}</Typography>
        </Box>
    );
}

const sx = {
    container: {
        padding: '0.5rem 0',
    },
    click: {
        cursor: 'pointer',
    },
};
