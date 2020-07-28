import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
class TaskItem extends Component {
    render() {
        const { classes, task, status,onClickEdit } = this.props;
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>
                        {task.description}
                    </p>
                </CardContent>
                <CardActions className={classes.cardactions}>
                    <Fab color="primary" aria-label="Edit" className={classes.fab} size="small" onClick={onClickEdit}>
                        <Icon fontSize='small'>edit_icon</Icon>
                    </Fab>
                    <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
                        <Icon fontSize='small'>delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);