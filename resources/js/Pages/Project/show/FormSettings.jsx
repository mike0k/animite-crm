import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';
import Select from '@/Components/form/Select';

export default function FormSettings({ onClose, project, labels, lists }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: project.name,
        client_id: project.client_id,
        status: project.status,
    });

    const onSubmit = () => {
        patch(route('project.update.settings', project.id), {
            onSuccess: () => {
                onClose(false);
            },
        });
    };

    return (
        <FormLayout onClose={onClose} onSubmit={onSubmit} title='Settings' processing={processing}>
            <TextField
                name='name'
                label={labels.name}
                value={data.name}
                error={errors.name}
                setData={setData}
            />

            <Select
                name='client_id'
                label={labels.client_id}
                value={data.client_id}
                error={errors.client_id}
                setData={setData}
                items={lists.client}
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
