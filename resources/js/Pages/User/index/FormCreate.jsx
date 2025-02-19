import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';

export default function Create({ onClose, labels }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
    });

    const onSubmit = (e) => {
        post(route('user.create'));
    };

    return (
        <FormLayout onClose={onClose} onSubmit={onSubmit} title='Add User' processing={processing}>
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
        </FormLayout>
    );
}
