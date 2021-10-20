import { NumberSymbol } from "@angular/common";

export interface Pagination {
    currentPage: number;
    itemsPerPae: number;
    totalItems: number;
    totalPages: NumberSymbol;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}