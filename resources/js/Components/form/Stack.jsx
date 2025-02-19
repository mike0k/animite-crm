import { default as MuiStack } from '@mui/material/Stack';

export default function Stack({ children, ...rest }) {
    return (
        <MuiStack spacing={2} {...rest}>
            {children}
        </MuiStack>
    );
}
