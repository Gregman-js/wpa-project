import Report from "../Report/Report";
export default class Builder {
    start() {
        this.report = new Report();
    }

    buildReport(data) {
        const now = new Date(8.64e15).toString();
        this.report.title.setTitle(`Report from date ${now}`)
        this.report.body.setBody(data)
        this.report.date = new Date();
    }

    generateReport() {
        this.text = this.generateTextFromReport();
    }

    get() {
        return this.text;
    }
}
