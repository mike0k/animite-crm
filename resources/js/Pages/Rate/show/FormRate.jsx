import { useForm } from '@inertiajs/react';

import DatePicker from '@/Components/form/DatePicker';
import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';
import Select from '@/Components/form/Select';

export default function FormRate({ onClose, rate, labels, lists }) {
    const { data, setData, patch, processing, errors } = useForm({
        project_id: rate.project_id,
        rate: rate.rate,
        type: rate.type,
        start_time: rate.start_time,
        end_time: rate.end_time,
        hour: rate.hour,
    });

    const onSubmit = () => {
        patch(route('rate.update.settings', rate.id), {
            onSuccess: () => {
                onClose(false);
            },
        });
    };

    return (
        <FormLayout onClose={onClose} onSubmit={onSubmit} title='Rate' processing={processing}>
            <Select
                name='project_id'
                label={labels.project_id}
                value={data.project_id}
                error={errors.project_id}
                setData={setData}
                items={lists.project}
            />
            <Select
                name='type'
                label={labels.type}
                value={data.type}
                error={errors.type}
                setData={setData}
                items={lists.type}
            />
            <DatePicker
                name='start_time'
                label={labels.start_time}
                value={data.start_time}
                error={errors.start_time}
                setData={setData}
            />
            <DatePicker
                name='end_time'
                label={labels.end_time}
                value={data.end_time}
                error={errors.end_time}
                setData={setData}
            />
            <TextField
                name='rate'
                label={labels.rate}
                value={data.rate}
                error={errors.rate}
                setData={setData}
            />
            <TextField
                name='hour'
                label={labels.hour}
                value={data.hour}
                error={errors.hour}
                setData={setData}
            />
        </FormLayout>
    );
}
