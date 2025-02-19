import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Drawer from '@/Components/form/Drawer';

import ListHeader from '@/Components/header/ListHeader';
import View from '@/Components/form/View';

import FormRate from './show/FormRate';

export default function Show({ rate, labels, lists }) {
    const [form, setForm] = React.useState(false);

    const onForm = (type) => {
        setForm(type);
    };

    const status = lists.status.find((item) => item.key === rate.status)?.value || 'Unknown';

    return (
        <DashLayout>
            <Head title='View Rate' />

            <ListHeader title='View Rate' />

            <View title={labels.rate.name} value={rate.name} onClick={() => onForm('settings')} />
            <View
                title={labels.rate.client_id}
                value={rate.client.name}
                onClick={() => onForm('settings')}
            />
            <View title={labels.rate.status} value={status} onClick={() => onForm('settings')} />

            <Drawer open={form !== false} onClose={() => onForm(false)}>
                {form === 'settings' && (
                    <FormRate onClose={onForm} rate={rate} labels={labels.rate} lists={lists} />
                )}
            </Drawer>
        </DashLayout>
    );
}
