import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookList : any;

  private category : any;

  private sub : any;
  
  constructor(private router: Router , private bookService : BookServiceService, private activatedRoute : ActivatedRoute) {
    
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
      this.category = params.get('category');
      return this.bookService.getBooksByCategory(this.category);
      })
      ).subscribe(
      (books: any) => {
      this.bookList = books;
      },
      error => {
      console.error('Error fetching books:', error);
      }
      );
  }
  
  showDetails(book : any){
    console.log(book+" book")
    this.router.navigate(['/bookdetail',book.id]);
  }
}
