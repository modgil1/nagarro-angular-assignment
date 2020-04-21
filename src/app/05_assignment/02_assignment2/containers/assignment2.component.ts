
import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  // todoList: Todo[]
  // constructor(private modgil : AssignmentComponent){}

  // ngOnInit(){
  //   this.todoList = this.modgil.todos
  // }

  
  // todos: Todo[]
  // className = "";

  todos;
  
  constructor( arr: AssignmentComponent)
  {
  this.todos = arr.getTodos();
  }

    
    
    // toggleClass(){
    //   if(this.className === "active"){
    //      this.className = "" 
    //  }else{
    //     this.className = "active";
    //   }
    //  }
}
