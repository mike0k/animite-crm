import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';
import Select from '@/Components/form/Select';

export default function Create({ onClose, labels, lists }) {
    const { data, setData, post, processing, errors } = useForm({
        client_id: null,
        name: null,
    });

    const onSubmit = (e) => {
        post(route('project.create'));
    };

    return (
        <FormLayout
            onClose={onClose}
            onSubmit={onSubmit}
            title='Add Project'
            processing={processing}>
            <Select
                name='client_id'
                label={labels.client_id}
                value={data.client_id}
                error={errors.client_id}
                setData={setData}
                items={lists.client}
            />
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
