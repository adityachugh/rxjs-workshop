import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService, School} from 'src/app/services/api.service';

@Component({
  selector: 'app-schools-page',
  templateUrl: './schools-page.component.html',
  styleUrls: ['./schools-page.component.scss']
})
export class SchoolsPageComponent implements OnInit {

  schools$: Observable<School[]> = this.api.schools();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
