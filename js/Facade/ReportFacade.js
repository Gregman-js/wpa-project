import GenerateReportCommand from "../Command/GenerateReportCommand";
import CommandBus from "../Bus/CommandBus";

export default class ReportFacade {
    constructor() {
        this.bus = new CommandBus();
    }

    async generateReport(type) {
        const command = new GenerateReportCommand(type);
        return await this.bus.dispatch(command);
    }
}
