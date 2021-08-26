import { Component, OnInit } from '@angular/core';
import { CourseSevice } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl:`./course.component.html` ,
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {
  isActive = false;
  // courses=['Angular','Spring Boot','JEE','Flutter','React'];
  title = 'hello'
  Img = 'https://pbs.twimg.com/profile_images/1322781586513895425/G_stL2vh_400x400.jpg'
  courses:string[];

  email:string='nabil';
  OnKeyUp(){
    console.log(this.email)
  }
  onClick(){
    console.log('button clicked');
  }

  onClickDiv(){
    console.log('div is clicked')
  }
  
  constructor(courseService : CourseSevice ) {
    this.courses=courseService.getCourses(); 
  }

  ngOnInit(): void {
  }

}
