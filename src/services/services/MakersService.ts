import { getAuthAxiosInstance } from '../../helpers/axios.helper.ts';
import { MakersRepository } from '../nswag-generated-file.ts';

export class MakersService extends MakersRepository {
    constructor () {
        super(undefined, getAuthAxiosInstance());
    }
}