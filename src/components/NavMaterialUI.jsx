import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Search from '../Search';

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
  link: {
      textDecoration: 'none',
      fontSize: '24px',
      padding: '50px'
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
                        <Link className={classes.link} to="/">TrailYa</Link>
                    </Typography>
                </div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <Search
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      placeholder="Search…"
                    />
                </div>
                <div className={classes.homeRoute}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link className={classes.link} to="/about">About Us</Link>
                    </Typography>
                </div> 
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}