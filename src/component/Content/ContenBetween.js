import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    img: {
        textAlign: 'center',
        marginTop: 20,
        background: '#5E0021'
    }
}));

function ContenBetween(props) {
    const classes = useStyles();

    return (
        <div className={classes.img}>
            <img src="https://files.vforum.vn/2014/T08/img/diendanbaclieu-129266-1.jpg" alt=""/>
        </div>
    );
}

export default ContenBetween;