import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-module/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  categories = ["Programming" , "Biographies" , "Business"];

  constructor (private userService : UserServiceService) {
  }

  ngOnInit(): void {
    this.userService.isAuthenticated$.subscribe(
      isAuthenticated => {
        this.isLoggedIn = isAuthenticated;
      }
    );
  }


  OnLogout (){
    this.userService.isLoggedoutUser();
  }

}
