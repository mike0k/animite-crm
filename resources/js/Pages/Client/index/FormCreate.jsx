import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';

export default function Create({ onClose, labels }) {
    const { data, setData, post, processing, errors } = useForm({
        name: null,
    });

    const onSubmit = (e) => {
        post(route('client.create'));
    };

    return (
        <FormLayout
            onClose={onClose}
            onSubmit={onSubmit}
            title='Add Client'
            processing={processing}>
            <TextField
                name='name'
                label={labels.name}
                value={data.name}
                error={errors.name}
                setData={setData}
            />
        </FormLayout>
    );
}
