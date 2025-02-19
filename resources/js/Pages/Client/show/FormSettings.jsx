import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';

export default function FormSettings({ onClose, client, labels }) {
    const { data, setData, patch, processing, errors } = useForm({
        color: client.color,
        inv_name: client.inv_name,
        inv_email: client.inv_email,
    });

    const onSubmit = () => {
        patch(route('client.update.settings', client.id), {
            onSuccess: () => {
                onClose(false);
            },
        });
    };

    return (
        <FormLayout onClose={onClose} onSubmit={onSubmit} title='Settings' processing={processing}>
            <TextField
                name='color'
                label={labels.color}
                value={data.color}
                error={errors.color}
                setData={setData}
            />

            <TextField
                name='inv_name'
                label={labels.inv_name}
                value={data.inv_name}
                error={errors.inv_name}
                setData={setData}
            />

            <TextField
                name='inv_email'
                label={labels.inv_email}
                value={data.inv_email}
                error={errors.inv_email}
                setData={setData}
                type='email'
            />
        </FormLayout>
    );
}
