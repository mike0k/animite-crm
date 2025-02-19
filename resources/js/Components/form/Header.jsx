import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Create({ title }) {
    return (
        <Box sx={sx.container}>
            <Typography variant='h5' component='p'>
                {title}
            </Typography>
        </Box>
    );
}

const sx = {
    container: {
        textAlign: 'center',
        borderBottom: 1,
        borderColor: 'primary.dark',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
    },
};
