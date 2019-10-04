import React from 'react'
import Grid from '@material-ui/core/Grid'

const Results = () => {
    return (
        <div>
            <Grid justify="center" alignItems="stretch">
                <h1>Results for [enter users search phrase]:</h1>
                <Grid className="resultsDiv" container direction="row" justify="center" alignItems="center">
                    <Grid className="resultsImage" >
                        <p>Image will go here</p>
                    </Grid>
                    <Grid>
                        <p>Name</p>
                        <p>Location</p>
                        <p>Rating</p>
                        <p>Difficulty</p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Results;