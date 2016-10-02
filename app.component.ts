import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `<h1> {{pageTitle}} </h1>
    <br>
    <br>
     <a routerLink="/summary" routerLinkActive="active">Professional Summary</a>
     <a routerLink="/skills" routerLinkActive="active">Skills</a>
     <a routerLink="/experience" routerLinkActive="active">Experience</a>
     <a routerLink="/education" routerLinkActive="active">Education</a>

     <router-outlet></router-outlet>
    `
})

export class AppComponent{
    pageTitle: string = 'Janine B. Valenzona'

}