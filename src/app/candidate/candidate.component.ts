import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../shared/models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate;
  imagePath: string;
  NUM_OF_IMAGES = 13;

  ngOnInit() {
    const imageNum = this.pickRandomImageNum(this.NUM_OF_IMAGES);
    this.imagePath = "assets/" + imageNum + ".jpg";
  }

  pickRandomImageNum(numOfImages: number): number {
    return this.getRandomInt(numOfImages);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
}
