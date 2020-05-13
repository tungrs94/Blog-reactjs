import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CakeIcon from '@material-ui/icons/Cake';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    img: {
        width: '30%',
        border: '1px solid gray',
        borderRadius: '50%'
    },
    divHeader: {
        textAlign: 'center',
        marginTop: 5,
    },
    h3: {
        textAlign: 'center'
    },
    typography: {
        marginTop: 5,
        marginLeft: 10
    },
    divIcon: {
        display: "flex",
        marginBottom: 10
    }
}));

function RightContent({info}) {
    console.log(moment().format());
    const classes = useStyles()

    return (
        <div style={{padding: '0px 20px'}}>
            <div className={classes.divHeader}>
                <img className={classes.img}
                     src="https://iweb.tatthanh.com.vn/pic/36/news/images/tranh-ve-bang-but-chi(1).jpg"
                     alt=""/>
            </div>
            <div>
                <h3 className={classes.h3}> {info?.name} </h3>
                <div className={classes.divIcon}>
                    <CakeIcon/>
                    <Typography
                        className={classes.typography}> {moment(info?.birthday).format('YYYY/MM/DD')} </Typography>
                </div>
                <div className={classes.divIcon}>
                    <PersonIcon/>
                    <Typography className={classes.typography}>{info?.sex}</Typography>
                </div>
                <div className={classes.divIcon}>
                    <PhoneIcon/>
                    <Typography className={classes.typography}>{info?.phone}</Typography>
                </div>
                <div className={classes.divIcon}>
                    <MailOutlineIcon/>
                    <Typography className={classes.typography}>{info?.email}</Typography>
                </div>
                <div className={classes.divIcon}>
                    <HomeIcon/>
                    <Typography className={classes.typography}>{info?.address}</Typography>
                </div>
                <div className={classes.divIcon}>
                    <LanguageIcon/>
                    <Typography className={classes.typography}>{info?.website}</Typography>
                </div>
            </div>
        </div>
    );
}

export default RightContent;