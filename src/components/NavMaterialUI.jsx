import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  AppBar: {
      backgroundColor: 'white',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: '#91A250',
  },
  search: {
    position: 'relative',
    color: 'black',
    borderRadius: '5px',
    backgroundColor: '#91A250',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 20,
    marginRight: 20,
    width: '15%',
  },
  searchIcon: {
    color: 'black',
    marginLeft: '200px',
    width: '12px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '5px',
    width: '100%',
    },
  },
);

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
            <Grid container direction="row" justify="center" alignItems="stretch"> 
                <div className={classes.homeRoute}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/">TrailYa</Link>
                    </Typography>
                </div>  
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.homeRoute}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/about">About Us</Link>
                    </Typography>
                </div> 
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}