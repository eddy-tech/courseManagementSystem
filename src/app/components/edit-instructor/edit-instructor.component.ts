import { SignupService } from './../../services/signup.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.css'],
})
export class EditInstructorComponent implements OnInit {
  editInstructorFormGroup!: FormGroup;
  editInstructorId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private signupService: SignupService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.editInstructorId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.signupService.getSignUp(this.editInstructorId).subscribe((signup) => {
      this.editInstructorFormGroup = this.fb.group({
        id: [signup.id, Validators.required],
        firstname: [signup.firstname, Validators.required],
        lastname: [signup.lastname, Validators.required],
        nickname: [signup.nickname, Validators.required],
        birthday: [signup.birthday, Validators.required],
        gender: [signup.gender, Validators.required],
      });
    });
  }

  onUpdateInstructor() {
    this.signupService
      .updateCourse(this.editInstructorFormGroup.value)
      .subscribe((data) => {
        alert('Succès Instructor updated');
        this.route.navigateByUrl('/course');
      });
  }
}
