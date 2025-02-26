import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../../../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private authService:AuthServiceService,private snackBar:MatSnackBar) {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          console.log('resp',response)
          if(response.status=='success'){
          this.snackBar.open('Login Successful','Close',{
            duration:3000
          })

          localStorage.setItem('token',response.token)
          localStorage.setItem('user',JSON.stringify(response.user))
          this.route.navigate(['/rooms'])
        }
        else{
          this.snackBar.open(response.message,'Close',{
            duration:3000
          })
        }
        },
        error:(err)=>{
          if(err.error?.message){
            this.snackBar.open(err.error.message,'Close',{
              duration:3000
            })
          }
          else{
            this.snackBar.open(err,'Close',{
              duration:3000
            })
          }

        }
       
      })
     
    }
    else{
      this.snackBar.open('Invalid details','Close',{
        duration:3000
      })
    }
  }
}
