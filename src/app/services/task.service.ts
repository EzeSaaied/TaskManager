import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:3000/tasks";
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) {   }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task):Observable<any> {
    return this.http.delete(this.apiURL + "/" + task.id);
  }

  createTask(task: any):Observable<any> {
    return this.http.post(this.apiURL, task, { headers: this.headers });
  }

  editTask(task: Task):Observable<any> {
    console.log(task);
    let params = new HttpParams()
  .set('title', task.title)
  .set('description', task.description)
  .set('datetime', task.datetime)
  .set('reminder', task.reminder);
    return this.http.put(this.apiURL + "/" + task.id, params) 
  }
}
