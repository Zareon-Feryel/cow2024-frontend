//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.3.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */

// @ts-nocheck

import { BaseApi } from "./BaseApi";

import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class Users extends BaseApi {
    protected instance: AxiosInstance;
    protected baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        super();

        this.instance = instance || axios.create();

        this.baseUrl = baseUrl ?? this.getBaseUrl("");

    }

    /**
     * Signup user
     * @param body Signup request
     * @return success response
     */
    signup(body: SignUpRequest, cancelToken?: CancelToken): Promise<GetMeResponse> {
        let url_ = this.baseUrl + "/api/users/signup";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.transformResult(url_, _response, (_response: AxiosResponse) => this.processSignup(_response));
        });
    }

    protected processSignup(response: AxiosResponse): Promise<GetMeResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 201) {
            const _responseText = response.data;
            let result201: any = null;
            let resultData201  = _responseText;
            result201 = GetMeResponse.fromJS(resultData201);
            return Promise.resolve<GetMeResponse>(result201);

        } else if (status === 400) {
            const _responseText = response.data;
            let result400: any = null;
            let resultData400  = _responseText;
            result400 = ErrorResponse.fromJS(resultData400);
            return throwException("bad request", status, _responseText, _headers, result400);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<GetMeResponse>(null as any);
    }

    /**
     * Signin user
     * @param body Signin request
     * @return success response
     */
    signin(body: SignInRequest, cancelToken?: CancelToken): Promise<GetMeResponse> {
        let url_ = this.baseUrl + "/api/users/signin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.transformResult(url_, _response, (_response: AxiosResponse) => this.processSignin(_response));
        });
    }

    protected processSignin(response: AxiosResponse): Promise<GetMeResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = GetMeResponse.fromJS(resultData200);
            return Promise.resolve<GetMeResponse>(result200);

        } else if (status === 400) {
            const _responseText = response.data;
            let result400: any = null;
            let resultData400  = _responseText;
            result400 = ErrorResponse.fromJS(resultData400);
            return throwException("bad request", status, _responseText, _headers, result400);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<GetMeResponse>(null as any);
    }

    /**
     * Get user informations
     * @return success response
     */
    me( cancelToken?: CancelToken): Promise<GetMeResponse> {
        let url_ = this.baseUrl + "/api/users/me";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.transformResult(url_, _response, (_response: AxiosResponse) => this.processMe(_response));
        });
    }

    protected processMe(response: AxiosResponse): Promise<GetMeResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = GetMeResponse.fromJS(resultData200);
            return Promise.resolve<GetMeResponse>(result200);

        } else if (status === 400) {
            const _responseText = response.data;
            let result400: any = null;
            let resultData400  = _responseText;
            result400 = ErrorResponse.fromJS(resultData400);
            return throwException("bad request", status, _responseText, _headers, result400);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<GetMeResponse>(null as any);
    }

    /**
     * Logout user
     * @return success response
     */
    logout( cancelToken?: CancelToken): Promise<SuccessResponse> {
        let url_ = this.baseUrl + "/api/users/logout";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.instance.request(transformedOptions_);
        }).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.transformResult(url_, _response, (_response: AxiosResponse) => this.processLogout(_response));
        });
    }

    protected processLogout(response: AxiosResponse): Promise<SuccessResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (const k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SuccessResponse.fromJS(resultData200);
            return Promise.resolve<SuccessResponse>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SuccessResponse>(null as any);
    }
}

/** TO COPY IN EACH RESPONSE FILE */
export class BaseResponse implements IBaseResponse {
    /** success */
    success!: boolean;
    /** statusCode */
    statusCode!: number | undefined;
    /** result */
    result!: any | undefined;

    [key: string]: any;

    constructor(data?: IBaseResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.success = _data["success"];
            this.statusCode = _data["statusCode"];
            this.result = _data["result"];
        }
    }

    static fromJS(data: any): BaseResponse {
        data = typeof data === 'object' ? data : {};
        let result = new BaseResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["statusCode"] = this.statusCode;
        data["result"] = this.result;
        return data;
    }
}

/** TO COPY IN EACH RESPONSE FILE */
export interface IBaseResponse {
    /** success */
    success: boolean;
    /** statusCode */
    statusCode: number | undefined;
    /** result */
    result: any | undefined;

    [key: string]: any;
}

/** SuccessReponse */
export class SuccessResponse implements ISuccessResponse {
    /** success */
    success!: boolean;
    /** statusCode */
    statusCode!: number | undefined;

    [key: string]: any;

    constructor(data?: ISuccessResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.success = _data["success"];
            this.statusCode = _data["statusCode"];
        }
    }

    static fromJS(data: any): SuccessResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SuccessResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["statusCode"] = this.statusCode;
        return data;
    }
}

/** SuccessReponse */
export interface ISuccessResponse {
    /** success */
    success: boolean;
    /** statusCode */
    statusCode: number | undefined;

    [key: string]: any;
}

/** ErrorResponse */
export class ErrorResponse implements IErrorResponse {
    /** success */
    success!: boolean;
    /** error */
    error!: string | undefined;
    /** statusCode */
    statusCode!: number | undefined;

    [key: string]: any;

    constructor(data?: IErrorResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.success = _data["success"];
            this.error = _data["error"];
            this.statusCode = _data["statusCode"];
        }
    }

    static fromJS(data: any): ErrorResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["error"] = this.error;
        data["statusCode"] = this.statusCode;
        return data;
    }
}

/** ErrorResponse */
export interface IErrorResponse {
    /** success */
    success: boolean;
    /** error */
    error: string | undefined;
    /** statusCode */
    statusCode: number | undefined;

    [key: string]: any;
}

/** Request for sign up */
export class SignUpRequest implements ISignUpRequest {
    /** First name */
    firstName!: string;
    /** Last name */
    lastName!: string;
    /** Email */
    email!: string;
    /** Password */
    password!: string;
    /** User role */
    role!: number | undefined;

    [key: string]: any;

    constructor(data?: ISignUpRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.firstName = _data["FirstName"];
            this.lastName = _data["lastName"];
            this.email = _data["Email"];
            this.password = _data["Password"];
            this.role = _data["Role"];
        }
    }

    static fromJS(data: any): SignUpRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SignUpRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["FirstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["Email"] = this.email;
        data["Password"] = this.password;
        data["Role"] = this.role;
        return data;
    }
}

/** Request for sign up */
export interface ISignUpRequest {
    /** First name */
    firstName: string;
    /** Last name */
    lastName: string;
    /** Email */
    email: string;
    /** Password */
    password: string;
    /** User role */
    role: number | undefined;

    [key: string]: any;
}

/** Request for sign in */
export class SignInRequest implements ISignInRequest {
    /** Email */
    email!: string;
    /** Password */
    password!: string;

    [key: string]: any;

    constructor(data?: ISignInRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.email = _data["Email"];
            this.password = _data["Password"];
        }
    }

    static fromJS(data: any): SignInRequest {
        data = typeof data === 'object' ? data : {};
        let result = new SignInRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["Email"] = this.email;
        data["Password"] = this.password;
        return data;
    }
}

/** Request for sign in */
export interface ISignInRequest {
    /** Email */
    email: string;
    /** Password */
    password: string;

    [key: string]: any;
}

/** object me */
export class GetMe implements IGetMe {
    /** First name */
    firstName!: string;
    /** Last name */
    lastName!: string;
    /** Email */
    email!: string;
    /** User role */
    role!: number | undefined;

    [key: string]: any;

    constructor(data?: IGetMe) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.email = _data["email"];
            this.role = _data["role"];
        }
    }

    static fromJS(data: any): GetMe {
        data = typeof data === 'object' ? data : {};
        let result = new GetMe();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["role"] = this.role;
        return data;
    }
}

/** object me */
export interface IGetMe {
    /** First name */
    firstName: string;
    /** Last name */
    lastName: string;
    /** Email */
    email: string;
    /** User role */
    role: number | undefined;

    [key: string]: any;
}

/** Response for get me */
export class GetMeResponse implements IGetMeResponse {
    /** success */
    success!: boolean;
    /** statusCode */
    statusCode!: number | undefined;
    /** result */
    result!: GetMe | undefined;

    [key: string]: any;

    constructor(data?: IGetMeResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.success = _data["success"];
            this.statusCode = _data["statusCode"];
            this.result = _data["result"] ? GetMe.fromJS(_data["result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GetMeResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetMeResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["statusCode"] = this.statusCode;
        data["result"] = this.result ? this.result.toJSON() : <any>undefined;
        return data;
    }
}

/** Response for get me */
export interface IGetMeResponse {
    /** success */
    success: boolean;
    /** statusCode */
    statusCode: number | undefined;
    /** result */
    result: GetMe | undefined;

    [key: string]: any;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}