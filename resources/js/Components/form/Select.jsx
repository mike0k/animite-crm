import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function Select({ items, value, error, setData, ...rest }) {
    const onChangeInit = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <TextField
            select
            variant='outlined'
            value={value}
            error={error}
            labelId={rest.name}
            autoComplete={rest.name}
            helperText={error}
            onChange={onChangeInit}
            {...rest}>
            <MenuItem value=''>--None--</MenuItem>
            {items.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                    {item.value}
                </MenuItem>
            ))}
        </TextField>
    );
}
