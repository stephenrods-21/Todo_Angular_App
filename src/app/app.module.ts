import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { TestCComponent } from './test-c/test-c.component';

import { TodoService } from './services/todo.service';

const appRoutes: Routes = [
  {path:'',component: DashboardComponent},
  {path:'dashboard',component: DashboardComponent},
  { path: '**', redirectTo:'', component: DashboardComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestAComponent,
    TestBComponent,
    TestCComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
