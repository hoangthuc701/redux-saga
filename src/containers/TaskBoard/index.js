import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList'
import TaskForm from '../TaskForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../actions/task'
import * as modalActions from '../../actions/modal'

import PropTypes from 'prop-types'
import SearchBox from './../../components/SearchBox'
class TaskBoard extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTaskRequest } = taskActionCreators;
        fetchListTaskRequest();
    }
    handleEditTask = (task) => {
        // console.log(this)
        const { modalActionCreators, taskActionCreators } = this.props;
        const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(task);
        showModal();
        changeModalTitle("Edit task");
        changeModalContent(<TaskForm />)
       
    }
    renderBoard() {
        let xhtml = null;
        const { listTask } = this.props;
        xhtml = (
            <Grid container spacing={2}>

                {STATUSES.map((status, index) => {
                    const taskFilter = listTask.filter(task => task.status === status.value)
                    return (
                        <TaskList key={index} tasks={taskFilter} status={status} onClickEdit={this.handleEditTask} />
                    );
                })}
            </Grid>
        );
        return xhtml;
    }
    handleClose = () => {
        this.setState({ open: false })
    }

    addNewTask = () => {
        const { modalActionCreators, taskActionCreators } = this.props;
        const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing({title:'', description:''});
        showModal();
        changeModalTitle("Add new task");
        changeModalContent(<TaskForm />)
    }
    handleFilter = (event) => {
        const { value } = event.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(value);

    }
    renderSearchBox() {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter} />
        )
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.taskBoard}>
                    <Button variant="contained" color="primary" className={classes.Button} onClick={this.addNewTask}>
                        <AddIcon /> ADD NEW TASK
                    </Button>


                </div>
                {this.renderSearchBox()}
                {this.renderBoard()}

            </>
        );
    }
}
TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func
    }),
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,

    }),
    listTask: PropTypes.array,
}
const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))