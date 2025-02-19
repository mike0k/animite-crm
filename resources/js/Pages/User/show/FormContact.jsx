import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';
import Select from '@/Components/form/Select';

export default function FormContact({ onClose, user, labels, lists }) {
    const { data, setData, patch, processing, errors } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        status: user.status,
    });

    const onSubmit = () => {
        patch(route('user.update.contact', user.id), {
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
                name='first_name'
                label={labels.first_name}
                value={data.first_name}
                error={errors.first_name}
                setData={setData}
            />
            <TextField
                name='last_name'
                label={labels.last_name}
                value={data.last_name}
                error={errors.last_name}
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

            <Select
                name='status'
                label={labels.status}
                value={data.status}
                error={errors.status}
                setData={setData}
                items={lists.status}
            />
        </FormLayout>
    );
}
