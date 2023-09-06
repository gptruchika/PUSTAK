import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../books-module/book-service.service';
import { UserServiceService } from '../../user-module/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    suggestedbooks : any;
    isLoggedIn = false;

  constructor ( private BookServiceService : BookServiceService , private router : Router ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.BookServiceService.getBooksForHome().subscribe (
      (response) =>{
      this.suggestedbooks = response;
      }
    );
  }
    
  onClick ( book : any ) {
      this.router.navigate(['/booklist',book.category]);
  }
}
