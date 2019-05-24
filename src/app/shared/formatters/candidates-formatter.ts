import { Candidate } from "../models/candidate.model";
import { Job } from "../models/job.model";

export class CandidatesFormatter {
    
    getCandidatesDetailsFromFile(file: Object): Candidate[] {
        const candidates = [];
        Object.values(file).forEach(candidateInfo => 
            candidates.push(this.createCandidateFromFileInfo(candidateInfo)))
        
        return candidates;
    }

    createCandidateFromFileInfo(candidateInfo: any): Candidate {
        const candidate = new Candidate();
        candidate.name = candidateInfo.contact_info.name.formatted_name;
        
        candidate.jobs = candidateInfo.experience.map(jobInfo => {
            const job = new Job();
            job.title = jobInfo.title;
            job.startDate = jobInfo.start_date;
            job.endDate = jobInfo.end_date;
            return job;
        });

        return candidate;
    }
}