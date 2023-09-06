import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserServiceService } from 'src/user-module/user-service.service';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
  
    HeaderComponent,
       FooterComponent,
       NavbarComponent,
       StarRatingComponent,
       UserServiceService
  ],
  imports: [
    CommonModule
  ],
  providers: [UserServiceService]
})
export class SharedModule { }
