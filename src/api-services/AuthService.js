import { instance } from './helper';



export default class AuthService {
    
    static async register(email, password, phone) {
        const response = await instance.post('/auth/register', {
            email,
            password,
            phone
        });
        return response.data;
    }

    static async login(email, password) {
        
        const response = await instance.post('/auth/login', {
            email,
            password,
            phone: "9560403991"
        });
        return response.data;
    }
}