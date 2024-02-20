import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorService.firstNameAndLastnamePattern)  ]],
    //email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern) ], [ new EmailValidator() ]],  Mas legible pero más lento si hay muchas inicializaciones
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern) ], [this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    password2: ['', [ Validators.required]],
  }, {
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo('password', 'password2'),
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidator){}

  isValidField (field: string){
    return this.validatorService.isValidField( this.myForm, field);
  }

  onSubmit(): void{
    this.myForm.markAsTouched();
  }
}
