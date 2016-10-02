import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryComponent } from './summary.component';
import { SkillsComponent } from './skills.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';

const appRoutes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

