import { SignUp } from './model/signup.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-management-system';

  public s!: SignUp;

  constructor(
    public authService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let isloggedIn: any;
    let loggedUser: any;
    isloggedIn = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedIn != true || !loggedUser) this.route.navigateByUrl('/login');
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
  onLogout() {
    this.authService.logout();
  }

  onEditStudent(s: SignUp) {
    this.route.navigateByUrl('/editStudent/' + s.id);
  }

  onEditInstructor(i: SignUp) {
    this.route.navigateByUrl('/editInstructor/' + i.id);
  }
}
