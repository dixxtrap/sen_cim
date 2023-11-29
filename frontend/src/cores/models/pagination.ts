export interface PaginationResult<T> {
  totalPage: number;
  data: T;
  hasNext: boolean;
  length:number
}
