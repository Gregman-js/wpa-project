import ReportFacade from "./Facade/ReportFacade";

const facade = new ReportFacade();

const report = await facade.generateReport('xml');

console.log(report)
