import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import TaskBoard from '../TaskBoard';
import styles from './styles';
import { Provider } from 'react-redux'
import configureStore from './../../redux/configureStore'
import { ToastContainer} from 'react-toastify';
import Modal from './../../components/Modal'
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../components/Loading'
const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToastContainer/>
                <Loading/>
                <TaskBoard />
                <Modal/>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);