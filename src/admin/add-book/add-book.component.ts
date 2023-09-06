import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  signupForm !: FormGroup;

  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    author: ['', Validators.required],
    category:['', Validators.required],
    price: ['', Validators.required],
    rating: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log(this.signupForm.value);
  }

}