import { Component, OnInit } from '@angular/core';
// import { EducationService } from './education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//EducationComponent.$inject = []

export const EDUCATION_COMPONET = {
  bindings: {},
  controller: EducationComponent,
}
