import { AxiosResponse } from "axios";

export class BaseApi {
	protected getBaseUrl(baseUrl?: string): string {
		if (!baseUrl || baseUrl === "") {
			baseUrl = import.meta.env.VITE_BASE_API_URL ?? "";
		}
		return baseUrl ?? "";
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected transformOptions(options: any): Promise<any> {
		return Promise.resolve(options);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected transformResult(
		_url: string,
		response: AxiosResponse,
		processor: (response: AxiosResponse) => Promise<any>
	): Promise<any> {
		return processor(response);
	}
}
