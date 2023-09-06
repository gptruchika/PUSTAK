import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

   private baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getBooksByCategory(category : string) {
    return this.http.get(this.baseURL+category);
  }

  getBooksForHome() {
    return this.http.get(this.baseURL+"selected");
  }

  getBookById(id : any) {
    return this.http.get(this.baseURL+"book/"+id);
  }
}

