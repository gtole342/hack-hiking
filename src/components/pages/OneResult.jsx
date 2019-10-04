import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { getAnimals } from "../../constants";
import axios from "axios";


const useStyles = makeStyles({
    return: {
        color: 'gray',
        paddingLeft: '500px',
    },
    main: {
        paddingRight: '50px',
    },
    additionalImages: {
        padding: '10px',
    },
    moreImages: {
        paddingLeft: '490px',
    },
    resultsDetails: {
        color: '#43304C',
    },
    title: {
        fontSize: '24px',
    }
});

const OneResult = (props) => {
    const classes = useStyles();
    console.log(props);

    return (
        <div>
            <p className={classes.return} > ← Return to search results</p>
            <Grid container direction="row" justify="center" alignItems="stretch" color="#43304C">
                <div className={classes.main}>
                    <img src="https://cdn-files.apstatic.com/hike/7010203_smallMed_1554398018.jpg" alt='photo of location'></img>
                </div>
                <div className={classes.resultsDetails} item xs>
                    <p className={classes.title}>Angels Landing</p>
                    <p>Springdale, Utah</p>
                    <p>Rating</p>
                    <p>One of the most memorable National Park hikes. </p>
                    <p>Heavenly views await at the end of an exposed ridge.</p>
                </div>
            </Grid>
            <div className={classes.moreImages}>
                <img className={classes.additionalImages} src="https://cdn-files.apstatic.com/hike/7010203_sqsmall_1554398018.jpg" alt='photo of location'></img>
                <img className={classes.additionalImages} src="https://cdn-files.apstatic.com/hike/7010203_sqsmall_1554398018.jpg" alt='photo of location'></img>
            </div>
        </div>
    )
}

export default OneResult;