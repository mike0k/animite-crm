import { default as MuiDrawer } from '@mui/material/Drawer';
import Box from '@mui/material/Box';

export default function Drawer({ children, ...rest }) {
    return (
        <MuiDrawer anchor='right' {...rest}>
            <Box sx={sx.container}>{children}</Box>
        </MuiDrawer>
    );
}

const sx = {
    container: {
        minHeight: '100vh',
        minWidth: '15rem',
        padding: '1rem 0.5rem',
    },
};
