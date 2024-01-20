import Builder from "./Builder";

export default class JsonBuilder extends Builder {
    generateTextFromReport() {
        return JSON.stringify({
            title: this.report.title.getTitle(),
            date: this.report.date.toString(),
            body: this.report.body.getBody()
        });
    }
}
