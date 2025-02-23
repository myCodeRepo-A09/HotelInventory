import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb:FormBuilder,private route:Router) {
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
      this.route.navigate(['/login'])
      console.log(this.signupForm.value)
    }
    else{
      console.log('Form is invalid')
    }
  }
}
