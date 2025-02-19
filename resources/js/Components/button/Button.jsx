import { default as MuiButton } from '@mui/material/Button';

export default function Button({ children, ...rest }) {
    return (
        <MuiButton variant='contained' color='primary' {...rest}>
            {children}
        </MuiButton>
    );
}
