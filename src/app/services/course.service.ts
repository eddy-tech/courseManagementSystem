import { Course } from './../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  public getAllCourse(): Observable<Course[]> {
    let host = environment.host;
    return this.httpClient.get<Course[]>(host + '/course');
  }

  public searchCourse(keyword: any): Observable<Course[]> {
    let host = environment.host;
    return this.httpClient.get<Course[]>(
      host + '/course?startTime_like=' + keyword
    );
  }

  public deleteCourse(course: Course): Observable<void> {
    let host = environment.host;
    return this.httpClient.delete<void>(host + '/course/' + course.id);
  }

  public getAvailableCourse(): Observable<Course[]> {
    let host = environment.host;
    return this.httpClient.get<Course[]>(host + '/course?available=true');
  }

  public saveCourse(course: Course): Observable<Course> {
    let host = environment.host;
    return this.httpClient.post<Course>(host + '/course', course);
  }

  public updateCourse(course: Course): Observable<Course> {
    let host = environment.host;
    return this.httpClient.put<Course>(host + '/course/' + course.id, course);
  }

  public getCourse(id: number): Observable<Course> {
    let host = environment.host;
    return this.httpClient.get<Course>(host + '/course/' + id);
  }
}
