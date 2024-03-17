import { getAuthAxiosInstance, getDefaultAxiosInstance } from '../../helpers/axios.helper.ts';
import { MakersRepository } from '../nswag-generated-file.ts';

export class MakersService extends MakersRepository {
    constructor (secure = false) {
        super(undefined, secure ? getAuthAxiosInstance() : getDefaultAxiosInstance());
    }
}