import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './style'
import LoadingGif from '../../assets/images/Loading.gif'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import * as uiActions from './../../actions/ui'
class Loading extends Component {
    render() {
        const {classes, showLoading} = this.props;
        return (
            showLoading&&(
            <div className={classes.loading} >
                <img src={LoadingGif} alt="loading" className={classes.icon}/>
            </div>)
        );
    }
}
Loading.propTypes={
    classes: PropTypes.object,
    showLoading: PropTypes.bool
}
const mapStateTpProps  = state =>{
    return {
        showLoading: state.ui.showLoading
    }
}
const mapDispatchToProps = dispath =>{
    return{
        uiActionsCreator: bindActionCreators(uiActions,dispath),
    }
}

export default withStyles(styles)(connect(mapStateTpProps,mapDispatchToProps)(Loading));