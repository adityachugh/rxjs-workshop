import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesPageComponent} from 'src/app/pages/courses-page/courses-page.component';
import {SchoolsPageComponent} from 'src/app/pages/schools-page/schools-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
  },
  {
    path: 'schools',
    component: SchoolsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
