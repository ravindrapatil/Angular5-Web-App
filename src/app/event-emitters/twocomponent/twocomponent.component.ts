import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-twocomponent',
  templateUrl: './twocomponent.component.html',
  styleUrls: ['./twocomponent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TwocomponentComponent implements OnInit {

  subjects: string;

  constructor(private subService: SubjectService) { }

  ngOnInit() {
    this.subService.cast.subscribe(sub => this.subjects = sub);
  }

}
