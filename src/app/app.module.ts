import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainsComponent } from './admin/trains/trains.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTrainComponent } from './admin/add-train/add-train.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTrainComponent } from './admin/edit-train/edit-train.component';
import { RegisterComponent } from './register/register.component';
import { TrainSearchComponent } from './trainsearch/trainsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TrainsComponent,
    AddTrainComponent,
    EditTrainComponent,
    TrainSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
