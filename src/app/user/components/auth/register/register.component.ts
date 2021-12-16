import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/models/register';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  err: any = {};
  constructor(private authService: AuthService) {}
  //
  ngOnInit(): void {}
  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.err = err.error;
      }
    );
  }
}
