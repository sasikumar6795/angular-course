import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  courses=COURSES;
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChild('container')
  containerDiv:ElementRef;

  @ViewChildren('courseImage')
  courseImage:ElementRef;

  @ViewChildren(CourseCardComponent)
  cards:QueryList<CourseCardComponent>

  onCourseSelected(course:Course) {
    console.log('app button clicked' , course);
    console.log('course component', this.card);
    console.log('html element', this.containerDiv);
    
  }

  ngAfterViewInit(): void {
    console.log('course component', this.card);
    console.log('html element', this.containerDiv);
    console.log('image element', this.courseImage);
    console.log('query list', this.cards);
    console.log('change detection', this.cards.changes.subscribe(
      (newCourses) => {
        console.log("newCourses",newCourses);
      }
    ));
  }

  onCourseEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
    )
  }

}
