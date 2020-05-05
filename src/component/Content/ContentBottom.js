import React from 'react';
import Grid from "@material-ui/core/Grid";
import Cardbot from "../widgets/cardbot";
import Gridbot from "../widgets/gridbot";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bgrbot: {
        background: 'yellow'
    }
}));

function ContentBottom(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.bgrbot}>
            <Grid item xs={7}>
                <Gridbot/>
            </Grid>
            <Grid item xs={3}>
                <Cardbot/>
            </Grid>
        </Grid>
    );
}

export default ContentBottom;