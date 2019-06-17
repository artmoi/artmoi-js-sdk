

export interface Pagination<Paginating> {

    current_page: number;
    data: Paginating[];
    path: string;
    first_page_url: string;
    next_page_url: string;
    prev_page_url: string;
    per_page: number;
    from: number;
    to: number;
}
