import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup , Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router , private userService : UserServiceService) { 
  }

  username!: string;
  password!: string;

  ngOnInit() {
  }

  onSubmit() : void {
    
    this.userService.login(this.username,this.password).then((response) => {
      if (response) {
      this.router.navigate(["home"]);
    } else {
        alert("Invalid credentials");
      }
    });
  }
  
}
