import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Grid from '@material-ui/core/Grid';
import TaskItem from './../TaskItem'

class TaskList extends Component {
    render() {
        const { classes, tasks, status,onClickEdit } = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <div className={classes.status} >{status.label}</div>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskItem key={index} task={task} status={status} onClickEdit={()=>onClickEdit(task)}/>
                            );
                        }
                        )
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);