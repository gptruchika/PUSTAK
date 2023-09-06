import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'src/user-module/login/login.component';
import { SignupComponent } from 'src/user-module/signup/signup.component';
import { BooklistComponent } from 'src/books-module/booklist/booklist.component';
import { BookdetailsComponent } from 'src/books-module/bookdetails/bookdetails.component';
import { authGuard } from 'src/user-module/login/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'booklist/:category', component: BooklistComponent},
  { path: 'bookdetail/:id', component: BookdetailsComponent,canActivate : [authGuard]},
  { path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
