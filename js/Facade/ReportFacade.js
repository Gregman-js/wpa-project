import GenerateReportCommand from "../Command/GenerateReportCommand";
import CommandBus from "../Bus/CommandBus";
import Mimer from "../Mimer/Mimer";

export default class ReportFacade {
    constructor() {
        this.bus = new CommandBus();
    }

    async saveReport(type) {
        const command = new GenerateReportCommand(type);
        const data = await this.bus.dispatch(command);

        const blob = new Blob([data], {type: Mimer.getInstance().getMime(type)});
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = `report.${type}`;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }

    async generateReport(type) {
        const command = new GenerateReportCommand(type);
        return await this.bus.dispatch(command);
    }
}
