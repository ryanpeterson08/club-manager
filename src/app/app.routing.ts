import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';

const appRoutes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'team',
    component: TeamComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
