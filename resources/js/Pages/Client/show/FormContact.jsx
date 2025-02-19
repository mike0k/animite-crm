import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';

export default function FormContact({ onClose, client, labels }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: client.name,
        email: client.email,
        phone: client.phone,
        address: client.address,
    });

    const onSubmit = () => {
        patch(route('client.update.contact', client.id), {
            onSuccess: () => {
                onClose(false);
            },
        });
    };

    return (
        <FormLayout
            onClose={onClose}
            onSubmit={onSubmit}
            title='Contact Details'
            processing={processing}>
            <TextField
                name='name'
                label={labels.name}
                value={data.name}
                error={errors.name}
                setData={setData}
            />

            <TextField
                name='email'
                label={labels.email}
                value={data.email}
                error={errors.email}
                setData={setData}
                type='email'
            />

            <TextField
                name='phone'
                label={labels.phone}
                value={data.phone}
                error={errors.phone}
                setData={setData}
            />

            <TextField
                name='address'
                label={labels.address}
                value={data.address}
                error={errors.address}
                setData={setData}
                multiline
            />
        </FormLayout>
    );
}
