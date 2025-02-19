import React from 'react';
import { useRoute } from 'ziggy-js';
import dayjs from 'dayjs';

import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MdAdd } from 'react-icons/md';

import IconButton from '@/Components/button/IconButton';
import IndexTable from '@/Components/table/IndexTable';
import Config from '../../../config/Config';

const columns = [
    {
        id: 'date',
        label: 'Date',
        type: 'custom',
        value: (item) => dayjs(item.start_time).format(Config.format.date),
    },
    { id: 'start_time', label: 'Start Time' },
    { id: 'end_time', label: 'End Time' },
    { id: 'show', type: 'show', key: 'id', route: 'activity.show' },
];

export default function ActivityTable({ activities, project, onForm }) {
    const route = useRoute();

    return (
        <Paper sx={sx.container}>
            <Grid container spacing={2}>
                <Grid sx={sx.title}>
                    <Typography variant='h4'>Activity</Typography>
                </Grid>
                <Grid>
                    <IconButton onClick={() => onForm('activity.create')}>
                        <MdAdd />
                    </IconButton>
                </Grid>
            </Grid>

            <IndexTable
                models={activities}
                columns={columns}
                queryRoute={route('project.show', project.id)}
            />
        </Paper>
    );
}

const sx = {
    container: {
        padding: '1rem',
    },
    title: {
        flexGrow: 1,
    },
};
