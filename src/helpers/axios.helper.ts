import axios, { AxiosInstance } from 'axios';
import { BEARER_KEY } from '../constants/constants.ts';

const defaultAuthAxiosInstance: AxiosInstance = axios.create();

export function getDefaultAxiosInstance(): AxiosInstance
{
    const defaultAxiosInstance =  axios.create();
    
    defaultAxiosInstance.interceptors.response.use(function (response) {
        return response;
    }, async function (axiosError) {
        
        const originalRequest = axiosError.config;
        
        if (!originalRequest._retry) {
            originalRequest._retry = true;
            
            return defaultAxiosInstance(originalRequest);
        }
        
        return Promise.reject(axiosError);
    });
    
    return defaultAxiosInstance;
    
}

export function getAuthAxiosInstance (): AxiosInstance {
    defaultAuthAxiosInstance.interceptors.request.use((config) => {
        const bearer = window.sessionStorage.getItem(BEARER_KEY) ?? undefined;
        config.headers.Authorization = bearer ? `Bearer ${bearer}` : '';
        return config;
    });
    
    return defaultAuthAxiosInstance;
}