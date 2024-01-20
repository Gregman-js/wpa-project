import Title from "./Title";
import Body from "./Body";

export default class Report {
    title = Title.create();
    body = Body.create();
    date;
}
