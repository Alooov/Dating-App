import { NumberSymbol } from "@angular/common";

export interface Pagination {
    curretnPage: number;
    itemsPerPae: number;
    totalItems: number;
    totalPages: NumberSymbol;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}