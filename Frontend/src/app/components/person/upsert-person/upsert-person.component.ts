import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-upsert-person',
  templateUrl: './upsert-person.component.html',
  styleUrls: ['./upsert-person.component.less']
})
export class UpsertPersonComponent {
  firstName = new FormControl('', [Validators.required,
    Validators.pattern('^[A-Za-z ]+$')]);
  lastName = new FormControl('', [Validators.required,
    Validators.pattern('^[A-Za-z ]+$')]);
  
  constructor(private apiService: ApiService) { }

  isFormValid(){
    return this.firstName.valid && this.lastName.valid;
  }

  formRequestBody(): Person{
    const person = {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    };
    return person;
  }

  upsertPerson(){
    const request = this.formRequestBody();
    this.apiService.savePerson(request);
  }
}
