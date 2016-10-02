import { Component } from '@angular/core';

@Component({
    selector: 'summary-app',
    template: '<h1> {{pageTitle}} </h1>'
})

export class SummaryComponent{
    pageTitle: string = 'This is summary'

}