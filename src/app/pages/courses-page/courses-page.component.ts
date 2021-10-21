import {Component, OnInit} from '@angular/core';
import {ApiService, School} from 'src/app/services/api.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  queryChanged(query: string) {
    console.log('Query Changed: ', query);
  }

  schoolChanged(school: School) {
    console.log('School Changed: ', school);
  }
}
