import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseSevice } from './course/course.service';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchComponent } from './switch/switch.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    DirectivesComponent,
    SwitchComponent,
    InputFormatDirective,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseSevice,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
