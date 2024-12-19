interface BaseData{
    id: number;
}

interface BaseUser extends BaseData{
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UserRequest{
    name: string;
    job: string;
}

interface PageResult<T = unknown> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T;
}

export type { BaseData, BaseUser, UserRequest, PageResult };