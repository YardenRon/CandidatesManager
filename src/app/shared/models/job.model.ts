import * as moment from "moment";

export class Job {
    title: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    daysSinceLastJob: number;
}