import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component'; 
import { SummaryComponent } from './summary.component';
import { SkillsComponent } from './skills.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';

import { routing } from './app.routing';


@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule{

}