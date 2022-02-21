import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  courseFormGroup?: FormGroup;
  courseId: number;
  submitted: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.courseId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.courseId).subscribe((course) => {
      this.courseFormGroup = this.fb.group({
        id: [course.id, Validators.required],
        name: [course.name, Validators.required],
        description: [course.description, Validators.required],
        category: [course.category, Validators.required],
        subject: [course.subject, Validators.required],
        startTime: [course.startTime, Validators.required],
        numberStudent: [course.numberStudent, Validators.required],
        available: [course.available, Validators.required],
      });
    });
  }

  onUpdateCourse() {
    this.courseService
      .updateCourse(this.courseFormGroup?.value)
      .subscribe((data) => {
        alert('Succès Course updated');
        this.route.navigateByUrl('/course');
      });
  }
}
