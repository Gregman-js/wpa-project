export default class ApiData {
    async fetch() {
        const response = await fetch('http://localhost:8081/products');

        return await response.json();
    }
}
