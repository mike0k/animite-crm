import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Box from '@mui/material/Box';

import Drawer from '@/Components/form/Drawer';
import ListHeader from '@/Components/header/ListHeader';
import IndexTable from '@/Components/table/IndexTable';

import Create from './index/FormCreate';

const columns = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'show', type: 'show', key: 'id', route: 'client.show' },
];

export default function Index({ clients, labels }) {
    const [add, setAdd] = React.useState(false);

    const onAdd = () => {
        setAdd(!add);
    };

    return (
        <DashLayout>
            <Head title='Clients' />
            <Box sx={sx.container}>
                <Box sx={sx.header}>
                    <ListHeader title='Clients' onAdd={onAdd} />
                </Box>
                <Box sx={sx.content}>
                    <IndexTable models={clients} columns={columns} query='client.index' />
                </Box>
            </Box>
            <Drawer open={add} onClose={onAdd}>
                <Create onClose={onAdd} labels={labels.client} />
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
