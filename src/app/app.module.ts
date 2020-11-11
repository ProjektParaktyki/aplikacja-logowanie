import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: '',
      component: HomeComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
