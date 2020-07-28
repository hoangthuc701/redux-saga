import { toast } from 'react-toastify';

export const toastError = error => {
    if (typeof error === 'object' && error.hasOwnProperty('message')) {
        let { message } = error;
        if (message !== null && message !== 'undefined' && message !== '') {
            toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT, });
        }
    }
} 