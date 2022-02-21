import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  courseFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // INITIALIZER FORMBUILDER CREATING GROUP CONTROL
    this.courseFormGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subject: ['', Validators.required],
      startTime: [0, Validators.required],
      numberStudent: ['', Validators.required],
      available: [true, Validators.required],
    });
  }

  onSaveCourse() {
    this.submitted = true;
    if (this.courseFormGroup?.invalid) return;
    this.courseService
      .saveCourse(this.courseFormGroup?.value)
      .subscribe((data) => {
        alert('Success Saving Course');
        this.route.navigateByUrl('/course');
      });
  }
}
