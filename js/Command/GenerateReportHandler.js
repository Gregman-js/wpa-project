import DataProvider from "../Adapter/DataProvider";
import ApiData from "../Adapter/Data/ApiData";
import FileData from "../Adapter/Data/FileData";

export default class GenerateReportHandler {
    constructor(reportFactory) {
        this.reportFactory = reportFactory;
        this.dataProvider = new DataProvider(new FileData());
    }

    async handle(command) {
        const data = await this.dataProvider.fetchData();
        const reportBuilder = this.reportFactory.create(command.type, data);
        reportBuilder.start()
        reportBuilder.buildReport(data);
        reportBuilder.generateReport();
        return reportBuilder.get();
    }
}
