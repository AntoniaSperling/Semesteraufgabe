import { ExistDialogComponent } from './exist-dialog/exist-dialog.component';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BackendService } from '../shared/backend.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  user!: User;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = this.registerForm?.get('password')?.value;
    let confirmPass = this.registerForm?.get('passwordrepeat')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.compose([
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(8),
      Validators.maxLength(20)])
    ],
    passwordrepeat: [null],
    role: [null, Validators.required],
  }, { validators: this.checkPasswords });

  roles = [
    {name: 'Admin', abbreviation: 'admin'},
    {name: 'User', abbreviation: 'user'}
  ];

  constructor(private fb: FormBuilder, private bs: BackendService, private dialog: MatDialog) {}

  onSubmit(): void {
    const values = this.registerForm.value;
    console.log(values);
    this.user = {
      firstname: values.firstName,
      lastname: values.lastName,
    email: values.email,
    password: values.password,
    role: values.role
    };

    console.log("user : ", this.user);
    this.bs.registerNewUser(this.user).subscribe(
        response => {
          console.log(response);
          console.log(response.password);
        },
        error => {
          console.log(error);
        })
  }

  openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ExistDialogComponent, dialogConfig);
    }

  checkIfExists(evt: any): void {
    let email = this.registerForm.get('email')?.value;
    console.log('event-target', evt);
    console.log(email);
    this.bs.checkIfExist(email).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.openDialog();
      }
    },
      error => {
        console.log(error);
      }
    );
  }

}
