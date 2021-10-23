import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpsertPersonComponent } from './components/person/upsert-person/upsert-person.component';

const routes: Routes = [
  { path: 'upsert-person', component: UpsertPersonComponent },
  { path: "**", redirectTo: "/"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
