import DashLayout from '@/Layouts/DashLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

import Box from '@mui/material/Box';

export default function Index() {
    return (
        <DashLayout>
            <Head title='Dashboard' />

            <div className='bg-white'>
                <div className='text-gray-900'>You're logged in!</div>
            </div>
        </DashLayout>
    );
}

const sx = {
    forgot: {
        paddingTop: 2,
        textAlign: 'center',
    },
};
