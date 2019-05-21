import { Component } from '@angular/core';
import { CandidateService } from './shared/services/candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CandidatesManager';

  candidatesDetails;

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.candidateService.getCandidates().subscribe(candidates => {
      this.candidatesDetails = candidates;
    });
  }
}
