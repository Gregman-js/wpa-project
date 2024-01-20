import Builder from "./Builder";

export default class CsvBuilder extends Builder {
    generateTextFromReport() {
        const array = [Object.keys(this.report.body.getBody()[0])].concat(this.report.body.getBody())

        return array.map(it => {
            return Object.values(it).toString()
        }).join('\n')
    }
}
