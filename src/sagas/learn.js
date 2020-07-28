import {call,fork,cancel, put} from 'redux-saga/effects'

function* authorize(user, password){
    try {
        const token = yield call('api', user,password);
        put({type:'LOGIN_SUCCESS', token});
    }
    catch(err){
        put({type:'LOGIN_FAILED',err})
    }
}
function* loginFlow(){
    while(true){
        const {user,password} = yield take('LOGIN_REQUESTED');
        const task = yield fork(authorize,user,password);
        const action = yield take(['LOGIN_FAILED','LOGOUT']]);
        if (action.type=='LOGOUT')
            yield cancel(task);
        put({})
    }
}