import { default as MuiBox } from '@mui/material/Stack';

import Stack from '@/Components/form/Stack';

export default function Form({ onSubmit, withStack = false, children, ...rest }) {
    return (
        <MuiBox sx={sx.container} component='form' noValidate onSubmit={onSubmit} {...rest}>
            {withStack ? <Stack>{children}</Stack> : children}
        </MuiBox>
    );
}

const sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minWidth: '25vw',
    },
};
