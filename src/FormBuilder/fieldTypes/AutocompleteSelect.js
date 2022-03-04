import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteSelect = ({ optionsData, name, label, value,  optionKeys, onChange, error, disabled, freeSolo, variant, required }) => {

  const getOptionLabel = (option) => {
    let optionLabel;

    if (typeof option[optionKeys.name] === 'string') {

      optionLabel = option[optionKeys.name];
    } else {
      optionLabel = (option[optionKeys.name] && option[optionKeys.name].toString()) || '';
    }
    return optionLabel;
  };

  return (
    <>
      <Autocomplete
        disableClearable
        noValidate
        freeSolo={freeSolo}
        fullWidth
        clearOnBlur
        onChange={(event, value) => {
          event.target.value = value[optionKeys.value];
          event.target.name = name;
          onChange(event)
        }}
        options={optionsData}
        getOptionLabel={(option) => getOptionLabel(option)}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            variant={variant || 'standard'}
            required={required}
            InputProps={{ ...params.InputProps, type: 'search' }}
            // error={!!error}
            // helperText={error}
          />
        )}
        value={optionsData.find(option => option[optionKeys.value] === parseInt(value)) || null}
        disabled={disabled}
       >
      </Autocomplete>
    </>
  );
};

export default AutocompleteSelect;
