import { Component } from '@angular/core';
import { Text } from './text';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hei</h1>
        <search-replace [text]="text"></search-replace>
        <div id='textarea'>
            <div *ngFor="let line of text.lines">{{line}}</div>
        <div>
    `,
    styles: [`
        #textarea {
            border-style: solid;
        }
        .error {
            border-style: solid;
            border-color: red;
        }
    `]
})
export class AppComponent {
    constuctor() {
    }
    text: Text = {
        text: 'one\ntwo\nabbcdefabh\nthree',
        lines: 'one\ntwo\nabbcdefabh\nthree'.split('\n')
    };


}
