import { default as MuiTextField } from '@mui/material/TextField';

export default function TextField({ value, error, setData, ...rest }) {
    const onChangeInit = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <MuiTextField
            variant='outlined'
            value={value}
            error={error}
            autoComplete={rest.name}
            helperText={error}
            onChange={onChangeInit}
            {...rest}
        />
    );
}
