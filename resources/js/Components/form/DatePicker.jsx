import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import Config from '../../config/Config';

export default function DatePicker({ name, value, error, setData, ...rest }) {
    const [dateVal, setDateVal] = React.useState(value ? dayjs(value) : null);

    const onChangeInit = (newValue) => {
        setDateVal(newValue);
        setData(name, newValue.format(Config.format.date));
    };

    return (
        <MuiDatePicker
            value={dateVal}
            error={error}
            onChange={onChangeInit}
            format={Config.format.date}
            slotProps={{
                field: { clearable: true },
                textField: {
                    helperText: error,
                    error: error,
                },
            }}
            {...rest}
        />
    );
}
