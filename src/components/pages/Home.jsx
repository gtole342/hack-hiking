import React from 'react'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Search from '../../Search';

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
      color: '#43304C',
      borderRadius: '5px',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: '#91A250',
      },
      marginLeft: 40,
      marginRight: 20,
      width: '15%',
    },
    searchIcon: {
      color: '#43304C',
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
                <Search />
            </Grid>
            <h1 className="homeDemoTitle">Discovery a nearby trail</h1>
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