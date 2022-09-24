import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course:Course;
  @Input()
  cardIndex:number;
  @Output()
  courseSelected =  new EventEmitter<Course>();

  @Input('noImageTmpl')
  imageTmpl:TemplateRef<any>;

  @ContentChild('courseImage')
  image;
  constructor() { }


  ngAfterViewInit(): void {
    console.log('image from parent via content projection in view init', this.image);
  }


  ngAfterContentInit(): void {
    console.log('image from parent via content projection', this.image);
  }

  ngOnInit(): void {
  }

  onCourseView() {
    console.log("course button clicked");
    this.courseSelected.emit(this.course);
  }

  courseCardClasses() {
    return {
      'beginner' : this.course.category === 'BEGINNER',
    }
  }

}
