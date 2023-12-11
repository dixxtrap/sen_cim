

export interface PaginationDto{
  page: number;
  perPage: number;
  search:string;
  fromDate:string;
}

export const initialPagination: PaginationDto = {
  page: 0,
  perPage: 50,
  search: "",
  fromDate:"0000",


};
export const initialPaginationAll: PaginationDto = {
  page: 0,
  perPage: 100000000,
  search: "",
  fromDate:"0000",

};