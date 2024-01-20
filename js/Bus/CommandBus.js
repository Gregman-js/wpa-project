import GenerateReportCommand from "../Command/GenerateReportCommand";
import GenerateReportHandler from "../Command/GenerateReportHandler";
import ReportFactory from "../Factory/ReportFactory";

export default class CommandBus {
    handlers = {};
    constructor() {
        this.handlers[GenerateReportCommand.name] = new GenerateReportHandler(
            new ReportFactory()
        );
    }

    async dispatch(command) {
        return await this.handlers[command.constructor.name].handle(command);
    }
}
