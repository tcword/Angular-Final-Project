import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-date.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  editTask: Task = new Task();

  saveTask() {
    this.taskDataService.editTask(this.editTask).subscribe(t=> this.router.navigate(["task"]));
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.taskDataService
        .getTasks(+param["id"])
        .subscribe(
         t=> (this.editTask = t));
    });
  }

}
