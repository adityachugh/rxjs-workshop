import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://explore.teamstudy.com';

  constructor(private http: HttpClient) {}

  schools(): Observable<School[]> {
    return this.http.get(`${this.baseUrl}/schools`).pipe(
      map((res: {response: {schools: School[]}}) => res.response.schools),
    );
  }

  courses(query?: string, schoolId?: number): Observable<Course[]> {
    let queryParams = `?q=${query?.trim() || ''}`;
    if (schoolId) {
      queryParams += `&school=${schoolId}`;
    }
    return this.http.get(`${this.baseUrl}/courses${queryParams}`).pipe(
      map((res: {response: {courses: Course[]}}) => res.response.courses),
    );
  }

}

export interface School {
  id: number;
  fullName: string;
}

export interface Course {
  id: number;
  fullName: string;
}
