import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: any;

  constructor(private signUp: SignupService, public nav: NavbarService) { }
  ngOnInit(): void {
    this.nav.hide();
  }

  public formSubmit(myForm: NgForm) {

    console.log(myForm.value);
    this.signUp.signUpUser(myForm.value).subscribe((res: any) => {
      console.warn(res);
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.error = JSON.stringify(error.error.text);
      console.log(error.status);
      if (error.status == 200) {
        alert(error.error.text);
      } else {
        alert(error.error);
      }
    });
  }

}
