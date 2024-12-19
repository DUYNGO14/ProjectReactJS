interface ApiOptions 
{
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: {
            [key: string]: string;
    };
    body?: string;
}

interface BaseResponse{
    message?: string;
}

interface ApiResponse<T> extends BaseResponse{
    data?: T;
    error?: string;
    status: number;
}

export type { ApiOptions, BaseResponse, ApiResponse };