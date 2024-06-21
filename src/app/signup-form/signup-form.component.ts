import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  student = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(studentForm: any) {
    if (studentForm.valid && this.passwordsMatch()) {
      console.log('Form Submitted!', this.student);
      alert("Form is submitted")
    } else {
      console.log('Form is invalid');
      this.showValidationErrors(studentForm);
    }
  }

  passwordsMatch(): boolean {
    return this.student.password === this.student.confirmPassword;
  }

  showValidationErrors(form: any) {
    Object.keys(form.controls).forEach(key => {
      const controlErrors = form.controls[key].errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log(`Key control: ${key}, keyError: ${keyError}, err value: `, controlErrors[keyError]);
        });
      }
    });
  }
}
