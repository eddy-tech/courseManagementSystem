import { Course } from './../../model/course.model';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { AppDataState, DataStateEnum } from '../state/course.state';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent implements OnInit {
  public course$: Observable<AppDataState<Course[]>> | null = null;

  readonly dataStateEnum = DataStateEnum;

  constructor(
    private courseService: CourseService,
    private route: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onGetAllCourse() {
    this.course$ = this.courseService.getAllCourse().pipe(
      map((data) => ({
        dataState: DataStateEnum.LOADER,
        data: data,
      })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message,
        })
      )
    );
  }

  onGetAvailableCourse() {
    this.course$ = this.courseService.getAvailableCourse().pipe(
      map((data) => {
        return {
          dataState: DataStateEnum.LOADER,
          data: data,
        };
      }),
      startWith({
        dataState: DataStateEnum.LOADING,
      }),
      catchError((err) =>
        of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message,
        })
      )
    );
  }

  onNewCourse() {
    this.route.navigateByUrl('/newCourse');
  }

  onEditCourse(c: Course) {
    this.route.navigateByUrl('/editCourse/' + c.id);
  }

  onDelete(p: Course) {
    let v = confirm('Are you sure ?');

    if (v == true)
      this.courseService.deleteCourse(p).subscribe(
        (data) => {
          this.onGetAllCourse();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onSearch(dataSearch: any) {
    this.course$ = this.courseService.searchCourse(dataSearch.keyword).pipe(
      map((data) => {
        console.log(data);
        return {
          dataState: DataStateEnum.LOADER,
          data: data,
        };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message,
        })
      )
    );
  }
}
