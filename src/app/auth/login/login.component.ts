import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
form=new FormGroup(
  {
    password:new FormControl ('', Validators.compose([
      Validators.minLength(8),
      Validators.required,
    ])
     
    ),
    email:new FormControl('',Validators.compose([
      Validators.email,
      Validators.required
    ]))
  }
);
  ngOnInit() {
  }

}
