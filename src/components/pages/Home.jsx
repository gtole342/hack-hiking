import React from 'react'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

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
      paddingLeft: '50px',
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

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className="main"> 
                <div>
                    <p className="searchHeading">Are you ready to explore?</p>
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
            </Grid>
            <h1>Discovery a nearby trail</h1>
            <Grid container direction="row" justify="center" alignItems="stretch" >
                <Grid>
                    <div className="homeDemoHike">
                        <p className="demoText">Cool Hike</p>
                        <p>Seattle, WA</p>
                    </div>
                </Grid>
                <Grid>
                    <div className="homeDemoHike">
                        <p className="demoText">Cool Hike</p>
                        <p>Seattle, WA</p>
                    </div>
                </Grid>
                <Grid>
                    <div className="homeDemoHike">
                        <p className="demoText">Cool Hike</p>
                        <p>Seattle, WA</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;