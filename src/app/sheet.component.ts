import { Component } from '@angular/core';

@Component({
    selector: 'sheet',
    template: `
        <div id='textarea'>
            <div *ngFor="let line of lines">{{line}}</div>
        <div>
        `
})
export class SheetComponent {



}