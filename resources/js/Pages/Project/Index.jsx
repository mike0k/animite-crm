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
    { id: 'client.name', label: 'Client' },
    { id: 'show', type: 'show', key: 'id', route: 'project.show' },
];

export default function Index({ projects, labels, lists }) {
    const [add, setAdd] = React.useState(false);

    const onAdd = () => {
        setAdd(!add);
    };

    return (
        <DashLayout>
            <Head title='Projects' />
            <Box sx={sx.container}>
                <Box sx={sx.header}>
                    <ListHeader title='Projects' onAdd={onAdd} />
                </Box>
                <Box sx={sx.content}>
                    <IndexTable models={projects} columns={columns} query='project.index' />
                </Box>
            </Box>
            <Drawer open={add} onClose={onAdd}>
                <Create onClose={onAdd} labels={labels.project} lists={lists} />
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
