import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './modules/components/task-details/task-details.component';
import { AddTaskComponent } from './modules/components/add-task/add-task.component';
import { EditTaskComponent } from './modules/components/edit-task/edit-task.component';
import { TaskComponent } from './modules/components/task/task.component';



const routes: Routes = [
  {path: "", redirectTo:"task", pathMatch: "full"},
  {path: "details/:id", component: TaskDetailsComponent},
  {path: "add", component: AddTaskComponent},
  {path: "edit/:id", component: EditTaskComponent},
  {path: "task", component: TaskComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
