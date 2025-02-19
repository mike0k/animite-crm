import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import View from '@/Components/form/View';

export default function Details({ project, lists, onForm }) {
    const status = lists.status.find((item) => item.key === project.status)?.value || 'Unknown';

    return (
        <Paper sx={sx.container}>
            <Typography variant='h4'>Project Information</Typography>
            <View title='Project Name' value={project.name} onClick={() => onForm('settings')} />
            <View title='Status' value={status} onClick={() => onForm('settings')} />
            <View
                title='Client Name'
                value={project.client.name}
                onClick={() => onForm('settings')}
            />
        </Paper>
    );
}

const sx = {
    container: {
        padding: '0.25rem 1rem',
    },
};
