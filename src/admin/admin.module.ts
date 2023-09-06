import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SidenavbarComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
