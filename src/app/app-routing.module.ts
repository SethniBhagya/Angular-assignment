import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { HomeComponent } from './components/home/home.component';
import { InformationFormComponent } from './components/information-form/information-form.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'add', component: InformationFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
