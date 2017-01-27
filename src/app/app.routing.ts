import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';

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
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
