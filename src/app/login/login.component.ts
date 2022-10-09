import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  responsedata: any;
  constructor(private service: LoginService, private route: Router) {
    localStorage.clear();
   }

  ngOnInit(): void {
  }

  loginform = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  Proceedlogin() {
    if (this.loginform.valid) {
      this.service.Proceddlogin(this.loginform.value).subscribe(result => {
        this.responsedata = result;
        if (this.responsedata.token != null) {
          localStorage.setItem('token', this.responsedata.token);
          localStorage.setItem('refreshtoken', this.responsedata.refreshToken);
          //this.service.updatemenu.next();
          this.route.navigate(['']);
        } else {
          alert("login Failed");
        }
      });
    }
  }
}
