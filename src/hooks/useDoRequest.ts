import { useRef, useState } from 'react';
import apiRequest from '../services';

export interface IDoRequestActions<request, response> {
    doRequest: (data: request) => Promise<response>;
    remakeRequest: () => void;
    reset: () => void;
    loading: boolean;
}

const useDoRequest = <request, response>(requestInfo: (a: typeof apiRequest) => ((data:request) => Promise<response>)): IDoRequestActions<request, response> => {
    const [loading, setLoading] = useState(false);
    const requestParamsRef = useRef<request | null>(null);
    const doRequest = async (data: request): Promise<response> => (
        new Promise(async (resolve, reject) => {
            try {
                requestParamsRef.current = data;
                setLoading(true);
                const result = await requestInfo(apiRequest)(data);
                setTimeout(() => setLoading(false), 500);
                resolve(result);
            } catch (error) {
                setLoading(false);
                reject(`Ocorreu um erro -> ${(error)}`);
                // reject(new Error(JSON.stringify(error)));
            }
        })
    );
    const remakeRequest = (newParams?: (currentData: request) => request) => {
        if (requestParamsRef.current) {
            doRequest(newParams ? newParams(requestParamsRef.current) : requestParamsRef.current);
        } else {
            throw Error('Request não pode ser refeita');
        }
    };
    const reset = () => {
        setLoading(false);
        requestParamsRef.current = null;
    };
    return {
        doRequest,
        remakeRequest,
        reset,
        loading,
    };
};

export default useDoRequest;
