import { Candidate } from "../models/candidate.model";
import { Job } from "../models/job.model";
import * as moment from "moment";

export class CandidatesFormatter {

    DATE_FORMAT = "MMM/DD/YYYY";
    
    getCandidatesDetailsFromFile(file: Object): Candidate[] {
        const candidates = [];
        Object.values(file).forEach(candidateInfo => 
            candidates.push(this.createCandidateFromFileInfo(candidateInfo)))
        
        candidates.forEach(candidate => this.updateGapsBetweenJobs(candidate.jobs));

        return candidates;
    }

    createCandidateFromFileInfo(candidateInfo: any): Candidate {
        const candidate = new Candidate();
        candidate.name = candidateInfo.contact_info.name.formatted_name;
        
        candidate.jobs = candidateInfo.experience.map(jobInfo => {
            const job = new Job();
            job.title = jobInfo.title;
            job.startDate = moment(jobInfo.start_date, this.DATE_FORMAT);
            job.endDate = moment(jobInfo.end_date, this.DATE_FORMAT);
            return job;
        });

        return candidate;
    }

    updateGapsBetweenJobs(jobs: Job[]): void {
        let bothJobsExist;
        let datesExist;
        for (let index = 0; index < jobs.length-1; index++) {
          bothJobsExist = jobs[index] && jobs[index+1];
          datesExist = jobs[index].startDate && jobs[index+1].endDate;
    
          if (bothJobsExist && datesExist) {
            const gapBetweenJobs = Math.abs(jobs[index].startDate.diff(jobs[index+1].endDate, 'days'));
            jobs[index].daysSinceLastJob = gapBetweenJobs;
          }
        }
    }
}