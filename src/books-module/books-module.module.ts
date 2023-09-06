import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistComponent } from './booklist/booklist.component';
import { LoginComponent } from 'src/user-module/login/login.component';
import { FilterBooksPipe } from './filter-books.pipe';



@NgModule({
  declarations: [
    BookdetailsComponent,
    BooklistComponent,
    LoginComponent,
    FilterBooksPipe
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModuleModule { }
