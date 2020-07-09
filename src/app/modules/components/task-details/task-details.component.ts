import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-date.service';
import { Task } from '../../../task'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  id: number;

 
  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe((t => this.task = t));
  }

  constructor( private taskDataService: TaskDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.taskDataService.getTasks(this.id).subscribe((t) => (this.task = t));
    });
  }
}
