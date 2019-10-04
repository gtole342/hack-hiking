import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from "../Card";

const Results = (props) => {
    console.log(props)
    const trails = props.location.state.results.map((trail) => <Card trail={trail} />)
    
    return (
        <div>
            <Grid justify="center" alignItems="stretch">
                <h1>Results for [enter users search phrase]:</h1>
                <Grid container spacing={2}>
                    {trails}
                </Grid>
            </Grid>
        </div>
    )
}

export default Results;