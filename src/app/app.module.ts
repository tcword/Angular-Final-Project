import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './modules/components/task-details/task-details.component';
import { AddTaskComponent } from './modules/components/add-task/add-task.component';
import { NavComponent } from './nav/nav.component';
import { EditTaskComponent } from './modules/components/edit-task/edit-task.component';
import { TaskComponent } from './modules/components/task/task.component';

@NgModule({
  declarations: [AppComponent, TaskDetailsComponent, AddTaskComponent, NavComponent, EditTaskComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
