// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import ValidateForm from '../helpers/validateForm';
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
//   loginForm!: FormGroup;
//   constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: ['',Validators.required],
//       password: ['',Validators.required]
//     })
//   }
  

//   hideShowPass(){
//     this.isText = !this.isText;
//     this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
//     this.isText ? this.type = "text" : this.type = "password";
//   }

//   onLogin(){
//     if(this.loginForm.valid){
//       // console.log(this.loginForm.value)

//       this.auth.login(this.loginForm.value)
//       .subscribe({
//         next:(res)=>{
//           alert(res.message);
//           this.loginForm.reset();
//           this.router.navigate(['home'])
//         },
//         error:(err)=>{
//           alert(err?.error.message)
//         }
//       })
//       console.log(this.loginForm.value)
//     }else{
//       ValidateForm.validateAllFormFields(this.loginForm);
//       alert("Form is invalid");
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm! : FormGroup;
  status: { statuscode: number; message: string; } | undefined;
  constructor(private fb : FormBuilder, private auth : AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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

  onLogin(){
    this.status = {statuscode:0, message:"wait.."};
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.auth.addToken(res['token']);
        localStorage.setItem('payload', res['payload'])
        //alert("Login Success!")

        this.router.navigate(['/home']);
      },



      error: (err)=>{
        console.log(err);
        alert(err.error);
      },
      complete:()=>{
        
      }
    })
  }

}
