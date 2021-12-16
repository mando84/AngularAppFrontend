import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Register } from '../models/register';

const headerData = { headers: { 'Content-Type': 'application/json' } };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(register: Register): Observable<any> {
    return this.httpClient.post('/api/users/register', register, headerData);
  }

  loginUser(login: Login): Observable<any> {
    return this.httpClient.post('api/users/login', login, headerData);
  }
}
