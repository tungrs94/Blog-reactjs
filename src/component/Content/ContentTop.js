import React from 'react';
import Grid from "@material-ui/core/Grid";
import BodyCard from "../widgets/card";
import BodyCard2 from "../widgets/grid_list";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bgrtop: {
        background: '#AE8E99'
    }
}));

function ContentTop(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.bgrtop}>
            <Grid item xs={4}>
                <BodyCard/>
            </Grid>
            <Grid item xs={8}>
                <BodyCard2/>
            </Grid>
        </Grid>
    );
}

export default ContentTop;