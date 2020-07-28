import React, { Component } from 'react';
import styles from './style'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { Modal } from '@material-ui/core';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux'
import CloseIcon from '@material-ui/icons/Clear'
import * as actionTypes from '../../actions/modal'
class ModalC extends Component {
    render() {
        const { classes, open, component,title,modalActionCreator} = this.props;
        const onClose = modalActionCreator.hideModal;
        return (
            <Modal open={open} onClose={onClose}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseIcon className={classes.icon} onClick={onClose}></CloseIcon>
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}
const mapStateToProps = state =>({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});
const mapDispatchToProps = dispatch =>({
    modalActionCreator: bindActionCreators(actionTypes,dispatch)
});
const withConnect = connect(mapStateToProps,mapDispatchToProps);
ModalC.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    component: PropTypes.object,
    title: PropTypes.string
}
export default compose(
    withStyles(styles),
    withConnect,
)(ModalC);