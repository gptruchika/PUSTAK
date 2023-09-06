import { UserServiceService } from 'src/user-module/user-service.service';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'src/user-module/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from 'src/user-module/signup/signup.component';

import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { BookdetailsComponent } from 'src/books-module/bookdetails/bookdetails.component';
import { BooklistComponent } from 'src/books-module/booklist/booklist.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/core/core.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingComponent } from 'src/shared/star-rating/star-rating.component';
import { AddBookComponent } from '../admin/add-book/add-book.component';
import { SidenavbarComponent } from '../admin/sidenavbar/sidenavbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    NavbarComponent,
    StarRatingComponent,
    FooterComponent,
    BooklistComponent,
    BookdetailsComponent,
    AddBookComponent,
    SidenavbarComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},UserServiceService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
