import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Frontend';
  isLoading = false;
  loadingSub: Subscription = new Subscription();

  constructor(private loaderService: LoaderService){}

  ngOnInit(){
    this.loadingSub = this.loaderService.loading.subscribe(isLoading => {
        this.isLoading= isLoading;
    });
  }

  ngOnDestroy(){
    this.loadingSub.unsubscribe();
  }
}
