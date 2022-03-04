import { makeStyles } from '@mui/styles';
import {green} from "@mui/material/colors";

export const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  fullSizeButton: {
    width: '100%'
  },
  input: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(.5),
  },
  buttonLink: {
    color: 'unset',
    textDecoration: 'none'
  },
  title: {
    textTransform: 'capitalize'
  },
  buttonWithText: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginTop: theme.spacing(1)
  },
  readOnlyTitle: {
    fontWeight: 700,
    display: 'block'
  },
  loadingDownload: {
    marginLeft: theme.spacing(1)
  },



// Modal

  DialogContent: {
    padding: theme.spacing(2),
  },
  DialogActions: {
    margin: 0,
    padding: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

  toolbar:{
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(0),
    },
  },
  titleToolbar: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingLeft: theme.spacing(1),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
  },

}));
