import axios from 'axios';

export const instance = axios.create({
    // baseURL: 'http://http://api.maaamma.visom6.com',
    headers: {
        'Content-Type': 'application/json',
    }
});