import {
	getAuthAxiosInstance,
	getDefaultAxiosInstance,
} from "../../helpers/axios.helper";
import { ChatsRepository } from "../nswag-generated-file";

export class ChatsService extends ChatsRepository {
	constructor() {
		super(undefined, getAuthAxiosInstance());
	}
}
