import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Content from "./Content";
import RightConten from "./RightConten";

const useStyles = makeStyles({
    index: {
        color: 'white',
        maxWidth: 1200,
        margin: 'auto',
        marginTop: 50
    }
});

function Index(props) {
    const classes = useStyles()
    return (
        <div className={classes.index}>
            <Grid container>
                <Grid item xs={8}>
                    <div style={{backgroundColor: '#636363', padding: '20px'}}>
                        <Content/>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#263238', padding: '20px'}}>
                        <RightConten/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Index;