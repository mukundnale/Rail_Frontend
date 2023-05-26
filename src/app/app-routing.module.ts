import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainsComponent } from './admin/trains/trains.component';
import { AddTrainComponent } from './admin/add-train/add-train.component';
import { EditTrainComponent } from './admin/edit-train/edit-train.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'trains', component: TrainsComponent },
  { path: 'trains/add', component: AddTrainComponent },
  { path: 'trains/edit/:id', component: EditTrainComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
