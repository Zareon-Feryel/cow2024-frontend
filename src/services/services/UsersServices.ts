import { UsersRepository } from '../nswag-generated-file.ts';
import { getAuthAxiosInstance, getDefaultAxiosInstance } from '../../helpers/axios.helper.ts';

export class AuthService extends UsersRepository {
    constructor (secure = false) {
        super(undefined, secure ? getAuthAxiosInstance() : getDefaultAxiosInstance());
    }
}