import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskDataService } from '../../services/task-date.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: Task = new Task();

  addTask() {
    this.taskDataService.addTask(this.newTask).subscribe(
      t=> this.router.navigate(["task"]));
  }

  constructor(private taskDataService: TaskDataService, private router : Router) { }

  ngOnInit(): void {
  }

}
