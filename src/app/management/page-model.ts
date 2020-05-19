export interface Page<T> {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex?: number;

    data?: T[];
}
