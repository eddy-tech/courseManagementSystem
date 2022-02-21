import { BlocCourseGuard } from './guard/bloc-course.guard';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditInstructorComponent } from './components/edit-instructor/edit-instructor.component';
import { CourseGuard } from './guard/course.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'course',
    component: ListCourseComponent,
    canActivate: [BlocCourseGuard],
  },
  {
    path: 'newCourse',
    component: NewCourseComponent,
    canActivate: [CourseGuard],
  },
  {
    path: 'editCourse/:id',
    component: EditCourseComponent,
    canActivate: [CourseGuard],
  },
  {
    path: 'editInstructor/:id',
    component: EditInstructorComponent,
    canActivate: [CourseGuard],
  },
  {
    path: 'editStudent/:id',
    component: EditStudentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
