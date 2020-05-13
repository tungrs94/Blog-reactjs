import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        color: "#fff"
    }
}));

export default function Header({lang, setLang}) {
    const classes = useStyles();

    function handleSetLang(name) {
        console.log(name)
        setLang(name)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <div variant="h6" className={classes.title}>
                        <Button className={classes.button}>Home</Button>
                        <Button className={classes.button}>About</Button>
                        <Button className={classes.button}>Contact</Button>
                        <Button className={classes.button}>New</Button>
                    </div>
                    {/* <Typography variant="h6" className={classes.title}>
                        About
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>*/}
                    <div style={{display: 'flex'}}>
                        <div
                            style={{width: 30, height: 20, marginRight: 5}}
                            onClick={() => handleSetLang('eng')}
                        >
                            eng
                        </div>
                        <div
                            style={{width: 30, height: 20}}
                            onClick={() => handleSetLang('vi')}
                        >
                            vi
                        </div>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
