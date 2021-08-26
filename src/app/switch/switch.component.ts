import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
 view="angular";

 courses!: { id: number; title: string; }[];
  
 addCourses(){
   this.courses.push( {id:5,title:"React"});
 }
 removeCourse(course:any){
let index=this.courses.indexOf(course);
this.courses.splice(index,1);
 }
 LoadCourses(){
   this.courses =[
    {id:1, title:'Django'},
    {id:2, title:'Angular'},
    {id:3, title:'JEE'},
    {id:4, title:'Laravel'},
  ];
 }
  editCourse(course:any){
   course.title = "UPDATED";
 }

  constructor() { }

  ngOnInit(): void {
  }

}


