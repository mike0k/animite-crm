import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Grid from '@mui/material/Grid2';

import Drawer from '@/Components/form/Drawer';
import ListHeader from '@/Components/header/ListHeader';

import ActivityTable from './show/ActivityTable';
import Details from './show/Details';
import FormSettings from './show/FormSettings';

export default function Show({ project, activities, labels, lists }) {
    const [form, setForm] = React.useState(false);

    const onForm = (type) => {
        setForm(type);
    };

    return (
        <DashLayout>
            <Head title='View Project' />

            <ListHeader title='View Project' />

            <Grid container spacing={2} sx={sx.container}>
                <Grid size={6}>
                    <Details project={project} lists={lists} onForm={onForm} />
                </Grid>
                <Grid size={6}>
                    <Details project={project} lists={lists} onForm={onForm} />
                </Grid>
                <Grid size={12}>
                    <ActivityTable project={project} activities={activities} onForm={onForm} />
                </Grid>
            </Grid>

            <Drawer open={form !== false} onClose={() => onForm(false)}>
                {form === 'activity.create' && (
                    <FormSettings onClose={onForm} project={project} labels={labels.activity} />
                )}
                {form === 'settings' && (
                    <FormSettings
                        onClose={onForm}
                        project={project}
                        labels={labels.project}
                        lists={lists}
                    />
                )}
            </Drawer>
        </DashLayout>
    );
}

const sx = {
    container: {
        padding: '1rem',
    },
};
