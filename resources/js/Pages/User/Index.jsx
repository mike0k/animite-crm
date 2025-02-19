import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Box from '@mui/material/Box';

import Drawer from '@/Components/form/Drawer';
import ListHeader from '@/Components/header/ListHeader';
import IndexTable from '@/Components/table/IndexTable';

import Create from './index/FormCreate';

const columns = [
    { type: 'custom', label: 'Name', value: (user) => user.first_name + ' ' + user.last_name },
    { id: 'email', label: 'Email' },
    { id: 'show', type: 'show', key: 'id', route: 'user.show' },
];

export default function Index({ users, labels }) {
    const [add, setAdd] = React.useState(false);

    const onAdd = () => {
        setAdd(!add);
    };

    return (
        <DashLayout>
            <Head title='Users' />
            <Box sx={sx.container}>
                <Box sx={sx.header}>
                    <ListHeader title='Users' onAdd={onAdd} />
                </Box>
                <Box sx={sx.content}>
                    <IndexTable models={users} columns={columns} query='user.index' />
                </Box>
            </Box>
            <Drawer open={add} onClose={onAdd}>
                <Create onClose={onAdd} labels={labels.user} />
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
