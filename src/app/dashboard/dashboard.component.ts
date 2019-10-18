import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoList : ITodo[];
  public editTodo = {} as ITodo;
  constructor(private _todoService:TodoService) { }

  ngOnInit() {
    this.refreshTodoList();
  }

  refreshTodoList(){
    this.editTodo.Message = "";
    this._todoService.getAllTodos().subscribe((data: ITodo[])=>{
      if(data.length > 0)
        this.todoList = data;
        else
          this.todoList=[];
    })
  }

  getFormat(d){
    return moment(d).fromNow().toString();
  }

  markAsDone(key:string,idx:number){
    this._todoService.removeTodo(key).subscribe((data:any)=>{
      this.refreshTodoList();
    })
  }

  onCreate(){
    if(this.editTodo.Message == undefined || this.editTodo.Message == "")
    {
      alert("Cannot create empty todo!");
      return false;
    }

    this._todoService.createTodo(this.editTodo).subscribe((data:any)=>{
      this.refreshTodoList();
    })
  }

}
