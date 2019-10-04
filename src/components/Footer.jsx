import React from 'react';
import { useStyles } from '../theme';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <footer position="fixed" className={classes.footer} >
      <Box textAlign="center" maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Box>
    </footer>
  );
}

export default Footer;