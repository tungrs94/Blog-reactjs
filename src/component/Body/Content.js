import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

const useStyles = makeStyles({
    item: {
        marginBottom: 30,
        marginTop: 20
    },
    divIcon: {
        display: 'flex'
    },
    title: {
        marginLeft: 10,
        marginTop: 4
    },
    time: {
        marginLeft: 50
    }
});

function Content(props) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <CastForEducationIcon/>
                    <h3 className={classes.title}>EDUCATION</h3>
                </div>
                <div className={classes.divIcon}>
                    <div>
                        <h4>BACHKHOA-APTECH INTERNATIONAL IT EDUCATION SYSTEM</h4>
                    </div>
                    <h4 className={classes.time}>OCT 2018 - APR 2019</h4>
                </div>
                <p>Course: Python Programming</p>
                <p>PYTHON/MYSQL: 14/20 | HTML/CSS: 17/20</p>
                <h4>UNIVERSITY OF TRANSPORT AND COMMUNICATIONS</h4>
                <h4>SEP 2012 - FEB 2017</h4>
                <p>Major: Electronics and Communication Engineering</p>
                <p>GPA: 6.3/10</p>
            </div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <DesktopMacIcon/>
                    <h3 className={classes.title}>TECHNICAL SKILLS</h3>
                </div>
                <p>Language: Python, HTML.</p>
                <p>Web framework: Django</p>
                <p>SCM: Git, GitLab, GitHub</p>
                <p>OS: Ubuntu</p>
                <p>Team communication: Slack</p>
                <p>Editor: VSCode, SublimeText</p>
                <p>Python tool: virtualenv, pip, pep8, flake8, IPython, jupyter notebook</p>
                <p>Library: requests, beautifulsoup, jinja2, argparse, logging, pdb, JSON, XML, numpy, pandas,
                    matplotlib…</p>
                <p>Database: SQLite, PostgreSQL, MySQL</p>
            </div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <WorkOutlineIcon/>
                    <h3 className={classes.title}>WORK EXPERIENCE</h3>
                </div>
                <div className={classes.divIcon}>
                    <div>
                        <h4>DEVELOPMENT JOINT STOCK COMPANY VIET HUNG</h4>
                    </div>
                    <h4 className={classes.time}>MAR 2017 - MAY 2019</h4>
                </div>
                <p>Technical staff</p>
                <p>Main responsibilities:</p>
                <p>- Mobile network development</p>
                <p>- Check basic service quality</p>
                <p>- Design BTS indoor with autocad</p>
                <p>- Project participation: 3G/4G Huawei, 4G Nokia.</p>
            </div>
        </div>
    );
}

export default Content;