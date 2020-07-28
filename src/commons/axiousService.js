import axios from 'axios';
class AxiousService {
    constructor() {
        const instance = axios.create();
        axios.interceptors.response.use(this.handleSuccess,  this.handleError);
        this.instance = instance;
    }
    handleSuccess(response) {
        return response;
    }
    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }
    post(url,body){
        return this.instance.post(url,body);
    }
}
export default new AxiousService()