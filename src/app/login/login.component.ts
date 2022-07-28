import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginArray: any = new Array()
  loginUserData: any = new Array()
  credentialdata:any
  count:any
  adminRole: boolean = false;
 // csvUploadTime: any;
  userLogin: any;
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  registerForm:any =  FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    console.log("hello")
   // this.router.navigateByUrl("/mainpage");
   if(this.submitted)
   {
     this.userLogin='';
    // this.http.getUserData().subscribe((data)=>{

       console.log(this.registerForm['value'])
     //this.userLoginArray=data;
    //  this.userLoginArray.forEach((y:any) =>
    //  {
       if(this.registerForm['value']['usename']=='demo@gmail.com' && this.registerForm['value']['password']==123)
       {
           localStorage.setItem('localsetEmail','demo@gmail.com')
           this.userLogin='Success';
           this.credentialdata='';
         this.router.navigateByUrl("/mainpage");
       }
       else if(this.userLogin!='Success'){
         debugger
         this.credentialdata="The username or password you entered isn't correct."
       }
    // });
  // });



   }

  }
 
    //login form
    ngOnInit(): void {
      //login form
     //Add User form validations
     this.registerForm = this.formBuilder.group({
      usename: ['', [Validators.required]],
      password: ['', [Validators.required]],
      });
    }


}
