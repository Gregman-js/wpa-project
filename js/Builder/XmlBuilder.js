import Builder from "./Builder";
import {XMLBuilder} from "fast-xml-parser";

export default class XmlBuilder extends Builder {
    generateTextFromReport() {
        const builder = new XMLBuilder();
        return builder.build({
            title: this.report.title.getTitle(),
            date: this.report.date.toString(),
            body: this.report.body.getBody()
        })
    }
}
