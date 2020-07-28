import {fork, take,call,put, delay, takeLatest} from 'redux-saga/effects'
import * as taskTypes from './../constants/task'
import {fetchListTaskSuccess,fetchListTaskFailed,addTaskSuccess,addTaskFailed, fetchListTask} from './../actions/task'
import {hideModal} from '../actions/modal'
import {STATUS_CODE,STATUSES} from './../constants'
import {showLoading, hideLoading} from '../actions/ui';
import {getList,addTask} from '../apis/task'
function* watchFetchListAcion(){
    while (true){
        const action = yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const {params} = action.payload;
        const reps = yield call(getList, params);
        const {status, data} = reps;
        if (status === STATUS_CODE.SUCCESS){
            yield put(fetchListTaskSuccess(data));
        }
        else    
        {
            yield put(fetchListTaskFailed(data))
        }
        yield delay(500);
        yield put(hideLoading());      
    }
}
function* filterTaskSaga({payload}){
    yield delay(500);
    const {keyword} = payload;
    yield put(fetchListTask(keyword))
   
}
function* addTaskSaga({payload}){
    const {title, description} = payload;
    yield put(showLoading());
    const reps = yield call(addTask,{
        title,
        description,
        status: STATUSES[0].value
    });
    const {data, status} = reps;
    if (status === STATUS_CODE.CREATED){
        yield put(addTaskSuccess(data));
    }
    else    
    {
        yield put(addTaskFailed(data))
    }
    yield put(hideModal());
    yield delay(500);
    yield put(hideLoading());
}
function* rootSaga(){
    yield fork(watchFetchListAcion);
    yield takeLatest(taskTypes.FILTER_TASK,filterTaskSaga);
    yield takeLatest(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;