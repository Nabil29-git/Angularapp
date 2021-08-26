import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from './contact'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

// il faut les utiliser dans le s reactive forme 
 loginForm = new FormGroup({
   firstName:new FormControl('', Validators.required),
   lastName: new FormControl('',[ Validators.required, Validators.minLength(8), Validators.maxLength(10)])
 })
  
 public contact:Contact[] =[]
 public contactWay = [ 
   {id:1,name:"phone"},
   {id:2,name:"sms"},
   {id:1,name:"email"},
 ]
 public sexeType=["Men", "female","Other"]
 constructor(private el : ElementRef) { }

 ngOnInit(): void {

 }
 showDataForm(f:any){
   console.log(f);
 }
  public name:string ="Yassine Mabrouk "


 submit(f:any){

  let contact:Contact= new Contact();
  console.log(f.value)
  // noubliez pas que les données groupes dans un ngModelGroup =contact 
    contact.firstname=f.value.contact.firstname;
    contact.lastname=f.value.contact.lastname;
    contact.comment=f.value.contact.comment;
    contact.contactWayName=f.value.contact.contactway?.name;
    contact.abonner=f.value.contact.abonner;
    contact.sexe=f.value.contact.sexe;
    this.contact.push(contact);
 }
 onDeleteContact(c:Contact){
   let idex =this.contact.indexOf(c);
   // supprimer un comtact 
   this.contact.splice(idex,1);
 }

}
