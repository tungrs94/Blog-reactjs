import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#F3FCAD",
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    /* items:{
         width: "100% !important",
         maxWidth: 500,
         margin: "auto"
     }*/
}));

const tileData = [
    {
        img: "https://mtrend.vn/wp-content/uploads/2016/04/anh-bia-fb-buon-5.jpg",
        title: 'Image 1',
        author: 'author',
    },
    {
        img: "https://mtrend.vn/wp-content/uploads/2016/04/anh-bia-fb-buon-5.jpg",
        title: 'Image 2',
        author: 'author',
    },
    {
        img: "https://mtrend.vn/wp-content/uploads/2016/04/anh-bia-fb-buon-5.jpg",
        title: 'Image 3',
        author: 'author',
    },

];
export default function BodyCard2() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} className={classes.items}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
