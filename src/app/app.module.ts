import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
