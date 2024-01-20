export default class Mimer {
    instance;

    constructor() {
        if (this.instance) {
            throw new Error("Only one")
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Mimer();
        }

        return this.instance;
    }

    getMime(type) {
        // type to mime: json csv xml
        switch (type) {
            case 'json':
                return 'application/json';
            case 'csv':
                return 'text/csv';
            case 'xml':
                return 'application/xml';
        }

        return 'text/plain';
    }
}
