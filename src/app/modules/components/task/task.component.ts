import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskDataService } from '../../services/task-date.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task: Task[];

  getTask(): void {
    this.taskDataService.getTask().subscribe((t) => (this.task = t));
  }

  deleteTasks(id: number): void {
    this.taskDataService.deleteTasks(id).subscribe((p) => this.getTask());
  }

  constructor(private taskDataService: TaskDataService) {
    this.taskDataService.getTask().subscribe((t) => (this.task = t));
  }

  ngOnInit(): void {
    this.getTask();
  }
}
