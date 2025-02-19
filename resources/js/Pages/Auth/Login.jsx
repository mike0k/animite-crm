import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link as ILink, useForm } from '@inertiajs/react';

import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Button from '@/Components/button/Button';
import Form from '@/Components/form/Form';
import TextField from '@/Components/form/TextField';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <GuestLayout>
            <Head title='Log in' />

            <Form onSubmit={onSubmit}>
                <TextField
                    name='email'
                    label='Email'
                    value={data.email}
                    error={errors.email}
                    onChange={onChange}
                    autoComplete='username'
                    type='email'
                />

                <TextField
                    name='password'
                    label='Password'
                    value={data.password}
                    error={errors.password}
                    onChange={onChange}
                    type='password'
                />

                <Button type='submit' disabled={processing}>
                    Log in
                </Button>
            </Form>

            <Box sx={sx.forgot}>
                <Link
                    color='textSecondary'
                    underline='hover'
                    component={ILink}
                    href={route('auth.forgot')}>
                    Reset your password
                </Link>
            </Box>
        </GuestLayout>
    );
}

const sx = {
    forgot: {
        paddingTop: 2,
        textAlign: 'center',
    },
};
