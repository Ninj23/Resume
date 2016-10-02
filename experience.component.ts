import { Component } from '@angular/core';

@Component({
    selector: 'experience-app',
    template: '<h1> {{pageTitle}} </h1>'
})

export class ExperienceComponent{
    pageTitle: string = 'This is experience'

}