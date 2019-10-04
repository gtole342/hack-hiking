import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from "../Card";

const Results = (props) => {
    const trails = props.location.state.results.map((trail) => <Card trail={trail} />)
    
    return (
        <div>
            <Grid justify="center" alignItems="stretch">
                <h1>Results for [enter users search phrase]:</h1>
                <Grid className="resultsDiv" container direction="row" justify="center" alignItems="center">
                    {trails}
                </Grid>
            </Grid>
        </div>
    )
}

export default Results;