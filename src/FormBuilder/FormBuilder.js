import {Dialog, DialogActions} from "@mui/material";
import BuildFields from './buildFields';
import TextField from './fieldTypes/TextField';
import AutocompleteSelect from "./fieldTypes/AutocompleteSelect";
import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";
import React from "react";
import ToolbarDialog from "../Modal/CrudPanel/ToolbarDialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";


const FormBuilder = ({formFields, openModal, setOpenModal}) => {
  const formFieldTypes = { TextField, AutocompleteSelect };
  const classes = useStyles();
  const { spacing = 2, fields = {}, actions = {} } = formFields;

  const handleClose = () => {
    setOpenModal(false);
  };

  const renderInputFields = () => {
    return fields.map((item,index) => {
      const { column, label, inputType, isVisible, name, onChange, required, value, type, freeSolo, variant, optionKeys, optionsData } = item;

      const FormField = formFieldTypes[inputType];

      return (
        <Grid item xs={column.xs || 12} sm={column.xs || 12} md={column.xs || 12} lg={column.xs || 12} xl={column.xs || 12} key={index}>
          <FormField
            name={name}
            label={label}
            value={typeof value === 'undefined' || value === null ? '' : value}
            isInvalid={isVisible}
            optionsData={optionsData}
            optionKeys={optionKeys}
            type={type}
            variant={variant}
            freeSolo={freeSolo}
            onChange={onChange}
            required={required}
          />
          {/*{helperText && <FormHelperText error >{helperText}</FormHelperText>}*/}

        </Grid>
      );

    });
  }

  return (

  <>
    <Dialog
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          // Set 'open' to false, however you would do that with your particular code.
          handleClose()
        }
      }
      }
      aria-labelledby="customized-dialog-title"
      open={openModal}
    >
      <ToolbarDialog title={'Titulo de prueba'} onClose={handleClose}/>
      <DialogContent className={classes.DialogContent} dividers>
        <form noValidate autoComplete="off">
          <div>
            <Grid container spacing={spacing}>
                {renderInputFields()}
            </Grid>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <>
          {
            actions.map((item,index) => {
              return (
                <>
                  <Button autoFocus onClick={() => item.onClick()} key={item.label}>
                    { item.label}
                  </Button>
                </>
              )

          })
          }
        </>

      </DialogActions>
    </Dialog>
  </>
  );

}
export { FormBuilder, BuildFields };