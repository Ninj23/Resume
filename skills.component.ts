import { Component } from '@angular/core';

@Component({
    selector: 'skills-app',
    template: '<h1> {{pageTitle}} </h1>'
})

export class SkillsComponent{
    pageTitle: string = 'This is skills'

}