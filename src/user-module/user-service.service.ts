import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseURL: string = "http://localhost:8080/";

  private isLoggedIn = false;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private readonly userKey = 'currentUser';

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http :HttpClient) { }
 
  login ( username:string , password :string) :Promise<boolean> {
    const params = {
      username : username,
      password : password
    };

    return this.http.post<any>(this.baseURL+"login",null,{params})
    .toPromise()
    .then((response:any) => {
      this.isLoggedIn = response;
      if (this.isLoggedIn) {
        localStorage.setItem(this.userKey , JSON.stringify(username));
        this.isAuthenticatedSubject.next(true);
        return true;
      }
      return false;
    });
  }

  getUserDetail (username :String) : Observable<any> {
    return this.http.get(this.baseURL+"user/"+username);
  }

  updateUserDetail (userData : any) {
    return this.http.put<any>(this.baseURL+"update",userData);
  }

  signUp (userData : any) : Observable <any> {
    const url = this.baseURL+"addUser";
    return this.http.post<any>(url,userData);
  }

  addUser (user : any) {
    this.http.post<any>(this.baseURL+"addUser",user);
  }

  isLoggedInUser() : boolean {
    return this.isLoggedIn;
  }

  isLoggedoutUser() {
    this.isLoggedIn = false;
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem(this.userKey);
    localStorage.clear();
  }

  getCurrentUser ():any {
    const userStr = localStorage.getItem(this.userKey);
    return userStr ? JSON.parse(userStr) : null ;
  }

}
