export type HeroResponse<T> = {
    code: number;
    status: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: T
    }
}