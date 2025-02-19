import Stack from '@mui/material/Stack';

import Button from '@/Components/button/Button';

export default function Create({ processing = false, onClose }) {
    return (
        <Stack spacing={1}>
            <Button type='button' color='default' onClick={onClose} disabled={processing}>
                Close
            </Button>
            <Button type='submit' disabled={processing}>
                Save
            </Button>
        </Stack>
    );
}

const sx = {
    container: {
        flexGrow: 0,
    },
};
