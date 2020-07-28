import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux'
import * as ActionTypes from '../../actions/modal'
import * as TaskTypes from '../../actions/task'
import { Field, reduxForm } from 'redux-form'
import * as validatorTypes from '../../commons/Validation' 


const renderTextField = ({
    label,
    id,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => {

    return (
        <TextField
            id={id}
            label={label}
            margin="normal"
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
}
class TaskForm extends Component {
    handleSubmitForm = data=>{
        const {title, description} = data;
        const {TaskActionCreators} = this.props;
        const {addTask} = TaskActionCreators;
        addTask(title, description);
    }
    render() {
        const { classes, TaskFormActionCreators,handleSubmit,editingTask } = this.props;
        const onClose = TaskFormActionCreators.hideModal;
        const {title, description} = editingTask;
        console.log(editingTask);
        return (

            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                  
                        <Field
                            name='title'
                            id="standard-name"
                            label='Title'
                            component={renderTextField}
                            className={classes.textField}
                            validate= {[validatorTypes.required]}
                            value={title}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            name='description'
                            id="standard-multiline-flexible"
                            label='Description'
                            component={renderTextField}
                            className={classes.textField}
                            multiline
                            rowsMax="4"
                            validate= {[validatorTypes.required]}
                            value={description}
                        />

                    </Grid>
                    <Grid item md={12}>
                        <Box flexDirection="row-reverse" display='flex'>
                            <Button color="primary" type='submit'>Add task</Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    editingTask: state.task.taskEditing,
    initialValues:state.task.taskEditing
});
const mapDispatchToProps = dispatch => ({
    TaskFormActionCreators: bindActionCreators(ActionTypes, dispatch),
    TaskActionCreators: bindActionCreators(TaskTypes, dispatch),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({ form: 'TASK_MANAGEMENT' })

TaskForm.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    onClose: PropTypes.func,
}
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm);