import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Drawer from '@/Components/form/Drawer';

import ListHeader from '@/Components/header/ListHeader';
import View from '@/Components/form/View';

import FormContact from './show/FormContact';
import FormSettings from './show/FormSettings';

export default function Show({ client, labels }) {
    const [form, setForm] = React.useState(false);

    const onForm = (type) => {
        setForm(type);
    };

    return (
        <DashLayout>
            <Head title='View Client' />

            <ListHeader title='View Client' />

            <View
                title={labels.client.name}
                value={client.name}
                onClick={() => onForm('contact')}
            />
            <View
                title={labels.client.email}
                value={client.email}
                onClick={() => onForm('contact')}
            />
            <View
                title={labels.client.phone}
                value={client.phone}
                onClick={() => onForm('contact')}
            />
            <View
                title={labels.client.address}
                value={client.address}
                onClick={() => onForm('contact')}
            />
            <View
                title={labels.client.color}
                value={client.color}
                onClick={() => onForm('settings')}
            />

            <View
                title={labels.client.inv_name}
                value={client.inv_name}
                onClick={() => onForm('settings')}
            />
            <View
                title={labels.client.inv_email}
                value={client.inv_email}
                onClick={() => onForm('settings')}
            />

            <Drawer open={form !== false} onClose={() => onForm(false)}>
                {form === 'contact' && (
                    <FormContact onClose={onForm} client={client} labels={labels.client} />
                )}
                {form === 'settings' && (
                    <FormSettings onClose={onForm} client={client} labels={labels.client} />
                )}
            </Drawer>
        </DashLayout>
    );
}
