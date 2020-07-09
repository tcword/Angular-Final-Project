import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../../task'


@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  url: string = 'http://localhost:3000/task';

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getTasks(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + '/' + task.id, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + '/' + id);
  }

  deleteTasks(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + '/' + id);
  }

  constructor(private http: HttpClient) {}
}
