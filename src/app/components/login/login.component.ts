import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      //send data to backend
      // console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            console.log(res)
            alert(res.lastname);
            this.loginForm.reset();
            this.router.navigate(['']);
          },
          error:(err)=>{
            console.log(err);
            alert(err.status);
          },
        })


    }else{
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      // alert('Your form is invalid')
    }
  }


}
