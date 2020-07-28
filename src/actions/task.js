import * as taskApis from './../apis/task'
import * as taskContants from '../constants/task'
export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList()
            .then(respone => {
                dispatch(fetchListTaskSuccess(respone.data));
            })
            .catch(err => {
                dispatch(fetchListTaskFailed(err))
            })
    }
}
export const fetchListTask = (params = {}) => {
    return {
        type: taskContants.FETCH_TASK,
        payload: {
            params,
        }
    }
}
export const fetchListTaskSuccess = (data) => {
    return {
        type: taskContants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}
export const fetchListTaskFailed = (error) => {
    return {
        type: taskContants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}
export const filterTask = keyword => {
    return {
        type: taskContants.FILTER_TASK,
        payload: {
            keyword,
        }
    }
}
export const filterTaskSuccess = data => {
    return {
        type: taskContants.FILTER_TASK_SUCCESS,
        payload: {
            data,
        }
    }
}
export const addTask = (title, description) => {
    return {
        type: taskContants.ADD_TASK,
        payload: {
            title,
            description,
        }
    }
}
export const addTaskSuccess = (data) => {
    return {
        type: taskContants.ADD_TASK_SUCCESS,
        payload: {
            data
        }
    }
}
export const addTaskFailed = (error) => {
    return {
        type: taskContants.ADD_TASK_FAILED,
        payload: {
            error
        }
    }
}

export const setTaskEditing = (task) => {
    return ({
        type: taskContants.SET_TASK_EDITING,
        payload: {
            task
        }
    })
}