import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent {
  informationForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.informationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      civilStatus: new FormControl(''),
      nationality: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
      country: new FormControl(''),
    });
  }
  onSubmit(): void {
    if (this.informationForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.informationForm.value);
      //TODO: Implement the API call here
    } else {
      console.log('Please fill in all required fields.');
    }
  }

  onClear(): void {
    console.log('Clearing the form...');
    this.initializeForm();
    this.informationForm.reset();
  }
}
