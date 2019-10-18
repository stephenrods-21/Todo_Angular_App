import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private REST_API_SERVER = "https://apptodoapi.azurewebsites.net/";

  constructor(private httpClient:HttpClient) { }


getAllTodos=() =>{
  return this.httpClient.get(this.REST_API_SERVER+'api/todo/list');
};

createTodo=(todo:ITodo) =>{
  return this.httpClient.post(this.REST_API_SERVER+'api/todo/create', todo);
}

removeTodo = (key:string) => {
  return this.httpClient.delete(this.REST_API_SERVER+'api/todo/'+key+'/remove');
}

}
