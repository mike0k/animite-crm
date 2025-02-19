import React from 'react';
import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import Drawer from '@/Components/form/Drawer';

import ListHeader from '@/Components/header/ListHeader';
import View from '@/Components/form/View';

import FormContact from './show/FormContact';
import FormPassword from './show/FormPassword';

export default function Show({ user, labels, lists }) {
    const [form, setForm] = React.useState(false);

    const onForm = (type) => {
        setForm(type);
    };

    const status = lists.status.find((item) => item.key === user.status)?.value || 'Unknown';

    return (
        <DashLayout>
            <Head title='View User' />

            <ListHeader title='View User' />

            <View
                title='Name'
                value={user.first_name + ' ' + user.last_name}
                onClick={() => onForm('contact')}
            />
            <View title={labels.user.email} value={user.email} onClick={() => onForm('contact')} />
            <View title={labels.user.status} value={status} onClick={() => onForm('contact')} />
            <View title={labels.user.password} onClick={() => onForm('password')} />

            <Drawer open={form !== false} onClose={() => onForm(false)}>
                {form === 'contact' && (
                    <FormContact onClose={onForm} user={user} labels={labels.user} lists={lists} />
                )}
                {form === 'password' && (
                    <FormPassword onClose={onForm} user={user} labels={labels.user} />
                )}
            </Drawer>
        </DashLayout>
    );
}
