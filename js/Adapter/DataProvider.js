export default class DataProvider {
    constructor(data) {
        this.datafetcher = data;
    }

    async fetchData() {
        return await this.datafetcher.fetch();
    }
}
