import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/user/models/login';
import { AuthService } from 'src/app/user/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  err: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    console.log(JSON.stringify(this.login));
    this.authService.loginUser(this.login).subscribe(
      (req: any) => {
        console.log(JSON.stringify(req));
        //store the token in the local storage
        localStorage.setItem('token', req.token);
        let decodedValues = jwt_decode(req.token);
        console.log(JSON.stringify(decodedValues));
        localStorage.setItem('decodedValues', JSON.stringify(decodedValues));
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.err = err.error;
      }
    );
  }
}
