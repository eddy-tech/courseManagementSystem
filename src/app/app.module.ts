import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditInstructorComponent } from './components/edit-instructor/edit-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCourseComponent,
    NewCourseComponent,
    NavBarComponent,
    EditCourseComponent,
    LoginComponent,
    SignupComponent,
    ForbiddenComponent,
    EditStudentComponent,
    EditInstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
