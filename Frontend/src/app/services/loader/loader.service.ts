import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = new Subject<boolean>();

  appLoading(isLoading: boolean){ this.loading.next(isLoading); }
}
