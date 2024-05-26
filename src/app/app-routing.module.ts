import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorDetailsComponent } from './advisor-details/advisor-details.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/advisors', pathMatch: 'full' },
  { path: 'advisors', component: AdvisorListComponent },
  { path: 'advisors/create', component: AdvisorCreateComponent },
  { path: 'advisors/:id', component: AdvisorDetailsComponent },
  { path: 'advisors/:id/edit', component: AdvisorEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
