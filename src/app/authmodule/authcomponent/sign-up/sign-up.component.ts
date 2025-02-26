import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  userId!:number
  constructor(private fb:FormBuilder,private route:Router,private authService:AuthServiceService,private snackBar:MatSnackBar) {
    this.signupForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    },{validator:this.passwordMatchValidator})

   }
   passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  ngOnInit(): void {
  }


  onSubmit(){
    if(this.signupForm.valid){
      console.log('signUpForm',this.signupForm.value)
      this.authService.register(this.signupForm.value).subscribe({
        next:(response)=>{
          console.log('response for register',response);
          if(response && response.status=='success'){
            this.userId=response.userId
            this.snackBar.open(response.message,'Close',{
              duration:3000,
              panelClass:['custom-snackbar-success']
            })
            this.route.navigate(['/login'])
          }
          else{
            this.snackBar.open(response.message,'Close',{
              duration:3000,
              panelClass:['custom-snackbar-success']
            })
          }
          
        },
        error:(err)=>{
          this.snackBar.open(err.message,'Close',{
            duration:3000,
            panelClass:['custom-snackbar-error']
          })
        }
      })
     
     
      // console.log(this.signupForm.value)
    }
    else{
      console.log('Form is invalid')
    }
  }
}
