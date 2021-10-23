import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../models/person';
import { LoaderService } from '../loader/loader.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = environment.apiUrl; 

  constructor(private http: HttpClient,  
    private loaderService: LoaderService) { }

  async savePerson(person: Person){
    this.loaderService.appLoading(true);
    this.http.post<string>(`${this.API_URL}/person`, person).subscribe({
      next: data => {
        alert(`Request completed succesfully, please check out: ${data}`);
        return;
      }, 
      error: err => {
        alert(`Error during request: ${err.error.text ?? err.error}`);
      }      
    }).add(() => {
      this.loaderService.appLoading(false);
    });
  }
  
}
