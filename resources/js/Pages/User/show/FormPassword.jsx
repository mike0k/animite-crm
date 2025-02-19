import { useForm } from '@inertiajs/react';

import FormLayout from '@/Components/form/FormLayout';
import TextField from '@/Components/form/TextField';

export default function FormPassword({ onClose, user, labels }) {
    const { data, setData, patch, processing, errors } = useForm({
        password: '',
        password_confirmation: '',
        existing_password: '',
    });

    const onSubmit = () => {
        patch(route('user.update.password', user.id), {
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
                name='password'
                label='New Password'
                value={data.password}
                error={errors.password}
                setData={setData}
                type='password'
            />
            <TextField
                name='password_confirmation'
                label='Confirm New Password'
                value={data.password_confirmation}
                error={errors.password_confirmation}
                setData={setData}
                type='password'
            />
            <TextField
                name='existing_password'
                label='Existing Password'
                value={data.existing_password}
                error={errors.existing_password}
                setData={setData}
                type='password'
            />
        </FormLayout>
    );
}
