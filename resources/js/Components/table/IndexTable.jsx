import { router, Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MdOpenInNew } from 'react-icons/md';

export default function IndexTable({ columns, models, query, queryRoute }) {
    const [page, setPage] = React.useState(models.current_page - 1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const route = useRoute();

    React.useEffect(() => {
        const queryParams = {
            page: page + 1,
            rowsPerPage: rowsPerPage,
        };

        router.get(query ? route(query) : queryRoute, queryParams, {
            preserveState: true,
            preserveScroll: true,
        });
    }, [page, rowsPerPage, query]);

    const onChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={sx.container}>
            <TableContainer sx={sx.table}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {models.data.map((model) => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={model.id}>
                                    {columns.map((column) => {
                                        if (column.type === 'custom') {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.value(model)}
                                                </TableCell>
                                            );
                                        } else if (column.type === 'show') {
                                            const value = model[column.key];
                                            return (
                                                <TableCell key={column.id} align='right'>
                                                    <IconButton
                                                        href={route(column.route, value)}
                                                        component={Link}>
                                                        <MdOpenInNew />
                                                    </IconButton>
                                                </TableCell>
                                            );
                                        } else if (column.id.includes('.')) {
                                            const path = column.id;
                                            const value = path
                                                .split('.')
                                                .reduce((acc, key) => acc && acc[key], model);
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        } else {
                                            const value = model[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        }
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={sx.pagination}
                component='div'
                count={models.total}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
                labelRowsPerPage='Rows'
            />
        </Box>
    );
}

const sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        flexGrow: 1,
    },
    pagination: {
        flexGrow: 0,
    },
    table: {
        flexGrow: 1,
    },
};
