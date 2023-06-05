// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// //import ValidateForm from '../helpers/validateForm';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   type: string = "password";
//   isText: boolean = false;
//   eyeIcon: string = "fa-eye-slash";
//   loginForm! : FormGroup;
//   status: { statuscode: number; message: string; } | undefined;
//   constructor(private fb : FormBuilder, private auth : AuthService, private router: Router){}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     })
//   }

//   hideShowPass(){
//     this.isText = !this.isText;
//     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
//     this.isText ? this.type = "text" : this.type = "password";
//   }

//   onLogin(){
//     this.status = {statuscode:0, message:"wait.."};
//     console.log(this.loginForm.value);
//     this.auth.login(this.loginForm.value).subscribe({
//       next: (res:any)=>{
//         console.log(res);
//         this.auth.addToken(res['token']);
//         localStorage.setItem('payload', res['payload'])
//         //alert("Login Success!")

//         this.router.navigate(['/home']);
//       },



//       error: (err: { error: any; })=>{
//         console.log(err);
//         alert(err.error);
//       },
//       complete:()=>{
        
//       }
//     })
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  status: { statuscode: number; message: string } | undefined;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }

  onLogin() {
    this.status = { statuscode: 0, message: "wait..." };
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.payload.isAdmin) {
          this.router.navigate(['/trains']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        alert(err.error);
      },
      complete: () => {}
    });
  }
}