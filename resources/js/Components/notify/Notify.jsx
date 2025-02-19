import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { closeSnackbar, SnackbarProvider, useSnackbar } from 'notistack';

import IconButton from '@mui/material/IconButton';
import { MdClose } from 'react-icons/md';

function NotifyLogic() {
    const { enqueueSnackbar } = useSnackbar();
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash) {
            Object.keys(flash).map((key) => {
                if (flash[key]) {
                    enqueueSnackbar(flash[key], { variant: key });
                }
            });
        }
    }, [flash, enqueueSnackbar]);
}

export default function Notify({ children }) {
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={5000}
            action={(snackbarId) => (
                <IconButton size='small' onClick={() => closeSnackbar(snackbarId)}>
                    <MdClose />
                </IconButton>
            )}>
            {children}
            <NotifyLogic />
        </SnackbarProvider>
    );
}
