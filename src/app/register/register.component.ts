import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateForm } from '../helpers/validateForm';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  registerForm!: FormGroup;
  status: { statuscode: number; message: string; } | undefined;
  constructor(private fb : FormBuilder, private auth : AuthService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onRegister(){
    this.status = {statuscode:0, message:"wait.."};
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          alert("Registered Successfully...Redirecting to Login page")

          this.router.navigate(['/login']);
        },



        error: (err)=>{
          console.log(err);
          alert(err.error);
        },
        complete:()=>{
          
        }
      });
    }
    else{
      console.log('Please fill out all required fields');
    }
  }
}