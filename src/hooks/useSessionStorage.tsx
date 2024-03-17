/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IGetMe } from '../services/nswag-generated-file.ts';

export const useSessionStorage = (keyName: string, defaultValue: any) => {
    const [storedValue, setStoredValue] = React.useState<IGetMe>(() => {
        try {
            const value = window.sessionStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                const needStringify = typeof defaultValue === 'object';
                window.sessionStorage.setItem(keyName, needStringify ? JSON.stringify(defaultValue) : defaultValue);
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    
    const setValue = (newValue: any) => {
        try {
            const needStringify = typeof newValue === 'object';
            window.sessionStorage.setItem(keyName, needStringify ? JSON.stringify(newValue) : newValue);
        } catch (err) { /* empty */ }
        setStoredValue(newValue);
    };
    
    return [storedValue, setValue];
};