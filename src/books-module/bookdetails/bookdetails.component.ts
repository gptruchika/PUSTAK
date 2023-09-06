import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit{
  bookdetail: any;
  id:any;
  sub:any;

  constructor(private route: ActivatedRoute,private bookService: BookServiceService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
    //this.bookdetail = this.route.snapshot?.data?.data;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.bookService.getBookById(this.id).subscribe((response) => {
      this.bookdetail = response;
    });
    console.log(this.bookdetail);
  }
}
