export class CourtCaseFilter {

    pageNumber: number;
    pageSize: number;

    private filters: string[];

    public createUrlParameters(): string {
        this.filters = [];

        if (this.pageNumber && this.pageSize) {
            this.filters.push("pageNumber=" + this.pageNumber);
            this.filters.push("pageSize=" + this.pageSize);
        }

        return this.filters.length > 0 ?
            "?" + this.filters.join("&")
            : "";
    }

}
