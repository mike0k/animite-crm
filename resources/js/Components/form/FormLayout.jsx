import Stack from '@mui/material/Stack';

import Buttons from './Buttons';
import Form from './Form';
import Header from './Header';

export default function FormLayout({ onClose, onSubmit, title, processing, children }) {
    const onSubmitInit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Form onSubmit={onSubmitInit}>
            <Header title={title} />

            <Stack spacing={2} sx={sx.fields}>
                {children}
            </Stack>

            <Buttons onClose={onClose} processing={processing} />
        </Form>
    );
}

const sx = {
    fields: {
        flexGrow: 1,
        overflowY: 'auto',
    },
};
