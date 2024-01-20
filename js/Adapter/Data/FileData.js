import data from "../../../products.json";

export default class FileData {
    async fetch() {
        return data.products;
    }
}
