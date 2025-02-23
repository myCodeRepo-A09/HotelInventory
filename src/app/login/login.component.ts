import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm!:FormGroup
  constructor(private fb:FormBuilder,private route:Router) {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.route.navigate(['/rooms'])
      console.log(this.loginForm.value)
     
    }
    else{
      console.log('Form is invalid')
    }
  }
}
