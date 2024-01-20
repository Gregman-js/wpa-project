import JsonBuilder from "../Builder/JsonBuilder";
import CsvBuilder from "../Builder/CsvBuilder";
import XmlBuilder from "../Builder/XmlBuilder";

export default class ReportFactory {
    create(type, data) {
        let report;

        switch (type) {
            case 'json':
                report = new JsonBuilder();
                break;
            case 'csv':
                report = new CsvBuilder();
                break;
            case 'xml':
                report = new XmlBuilder();
                break;
            default:
                throw new Error(`Invalid report type: ${type}`);
        }

        return report;
    }
}
