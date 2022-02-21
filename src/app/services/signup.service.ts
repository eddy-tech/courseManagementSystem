import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../model/signup.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private httpClient: HttpClient) {}

  public signup(signup: SignUp): Observable<SignUp> {
    let host = environment.host;
    return this.httpClient.post<SignUp>(host + '/signup', signup);
  }

  public getSignUp(id: number): Observable<SignUp> {
    let host = environment.host;
    return this.httpClient.get<SignUp>(host + '/signup/' + id);
  }

  public updateCourse(signup: SignUp): Observable<SignUp> {
    let host = environment.host;
    return this.httpClient.put<SignUp>(host + '/course/' + signup.id, signup);
  }
}
