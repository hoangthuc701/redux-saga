import axiousService from './../commons/axiousService';
import { API_ENDPOINT } from '../constants';
//
const url = "tasks";
export const getList = (params = {}) => {
    var queryparams = '';
    if (Object.keys(params).length > 0) {
        queryparams = params;
        console.log(params);
    }

    return axiousService.get(`${API_ENDPOINT}/${url}?q=${queryparams}`);
}
export const addTask = (data) => axiousService.post(`${API_ENDPOINT}/${url}`, data);
