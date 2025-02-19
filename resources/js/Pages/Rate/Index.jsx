import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Box from '@mui/material/Box';

import Drawer from '@/Components/form/Drawer';
import ListHeader from '@/Components/header/ListHeader';
import IndexTable from '@/Components/table/IndexTable';

import Create from './index/FormCreate';

const columns = [
    { id: 'project.client.name', label: 'Client' },
    { id: 'project.name', label: 'Project' },
    { id: 'rate', label: 'Rate' },
    { id: 'start_time', label: 'Start' },
    { id: 'end_time', label: 'End' },
    { id: 'show', type: 'show', key: 'id', route: 'rate.show' },
];

export default function Index({ rates, labels, lists }) {
    const [add, setAdd] = React.useState(false);

    const onAdd = () => {
        setAdd(!add);
    };

    return (
        <DashLayout>
            <Head title='Rates' />
            <Box sx={sx.container}>
                <Box sx={sx.header}>
                    <ListHeader title='Rates' onAdd={onAdd} />
                </Box>
                <Box sx={sx.content}>
                    <IndexTable models={rates} columns={columns} query='rate.index' />
                </Box>
            </Box>
            <Drawer open={add} onClose={onAdd}>
                <Create onClose={onAdd} labels={labels.rate} lists={lists} />
            </Drawer>
        </DashLayout>
    );
}

const sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
        flexGrow: 0,
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
    },
};
