import React, {useEffect, useRef} from 'react';
import {Input, InputLabel } from '@mui/material';
import {TextField as TextFieldMaterial} from '@mui/material';

const TextField = ({ name, label, value, onChange, type, isInvalid, variant, required, fullWidth }) => {

  return (
    <>
      <TextFieldMaterial
        name={name}
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        helperText="Some important text"
        variant={variant || 'standard'}
        disabled={!isInvalid}
        required={required}
        fullWidth
      />
    </>
  );
};

export default TextField;
