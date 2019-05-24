import { Component } from '@angular/core';
import { CandidateService } from './shared/services/candidate.service';
import { CandidatesFormatter } from './shared/formatters/candidates-formatter';
import { Candidate } from './shared/models/candidate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CandidatesManager';

  candidates: Candidate[];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    const formatter = new CandidatesFormatter();
    this.candidateService.getCandidates().subscribe(candidates => {
      this.candidates = formatter.getCandidatesDetailsFromFile(candidates);
    });
  }
}