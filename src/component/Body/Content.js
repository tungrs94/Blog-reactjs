import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import moment from 'moment'

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

function Content({dataLang}) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <CastForEducationIcon/>
                    <h3 className={classes.title}>{dataLang?.field?.edu?.name}</h3>
                </div>
                {
                    dataLang?.education.map((data, index) => {
                        return (
                            <div key={index}>
                                <div className={classes.divIcon}>
                                    <div>
                                        <h4>{data?.name}</h4>
                                    </div>
                                    <h4 className={classes.time}>
                                        {moment(data?.start).format('YYYY/MM/DD')} ~ {moment(data?.end).format('YYYY/MM/DD')}
                                    </h4>
                                </div>
                                <p>{dataLang?.field?.edu?.course}: {data?.course}</p>
                                {
                                    data?.skills.length !== 0 &&
                                    <p>{dataLang?.field?.edu?.skills}: {
                                            data?.skills.map(skill => {
                                                return (
                                                    <div style={{marginLeft: 10}}> - {skill.name} : {skill.point}</div>
                                                )
                                            })
                                        }
                                    </p>
                                }
                                {
                                    data?.GPA &&
                                    <p>GPA: {data?.GPA}</p>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <DesktopMacIcon/>
                    <h3 className={classes.title}>{dataLang?.field?.tech?.name}</h3>
                </div>
                <p>{dataLang?.field?.tech?.language}: {dataLang?.skills?.language}</p>
                <p>{dataLang?.field?.tech?.database}: {dataLang?.skills?.database}</p>
                <p>{dataLang?.field?.tech?.scm}: {dataLang?.skills?.scm}</p>
                <p>{dataLang?.field?.tech?.os}: {dataLang?.skills?.os}</p>
                <p>{dataLang?.field?.tech?.editor}: {dataLang?.skills?.editor}</p>
                <p>{dataLang?.field?.tech?.tool}: {dataLang?.skills?.pythonTools}</p>
                <p>{dataLang?.field?.tech?.lib}: {dataLang?.skills?.library}</p>
                <p>{dataLang?.field?.tech?.other}: {dataLang?.skills?.others}</p>
            </div>
            <div className={classes.item}>
                <div className={classes.divIcon}>
                    <WorkOutlineIcon/>
                    <h3 className={classes.title}>{dataLang?.field?.work?.name}</h3>
                </div>
                {
                    dataLang?.experience.map(exp => {
                        return (
                            <div>
                                <div className={classes.divIcon}>
                                    <div>
                                        <h4> {exp?.name}</h4>
                                    </div>
                                    <h4 className={classes.time}>
                                        {moment(exp?.start).format('YYYY/MM/DD')} ~ {moment(exp?.end || moment().format()).format('YYYY/MM/DD')}
                                    </h4>
                                </div>
                                <p>{dataLang?.field?.work?.regency}: {exp?.regency}</p>
                                <p>{dataLang?.field?.work?.reponsibiliti}: {
                                    exp?.responsibilities.map(repos => {
                                        return (
                                            <div style={{marginLeft: 10}}>- {repos}</div>
                                        )
                                    })
                                }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Content;