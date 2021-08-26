import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 log(x:any){
   console.log(x);
 }
 loginForm = new FormGroup({
   firstName:new FormControl(null, Validators.required),
   lastName: new FormControl(null,[ Validators.required, Validators.minLength(8), Validators.maxLength(10)])
 })
  constructor() { }

  ngOnInit(): void {
  }

}
