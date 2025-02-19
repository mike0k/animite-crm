import { default as MuiButton } from '@mui/material/IconButton';

export default function IconButton({ children, ...rest }) {
    return (
        <MuiButton variant='contained' color='primary' {...rest}>
            {children}
        </MuiButton>
    );
}
