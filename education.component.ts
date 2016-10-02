import { Component } from '@angular/core';

@Component({
    selector: 'education-app',
    template: '<h1> {{pageTitle}} </h1>'
})

export class EducationComponent{
    pageTitle: string = 'This is education'

}