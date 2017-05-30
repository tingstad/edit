import { Component, Input } from '@angular/core';
import { SearchReplace } from './search-replace';
import { Text } from './text';

@Component({
    selector: 'search-replace',
    template: `
        <div>
            <div>
                Search <input
                    [(ngModel)]="searchReplace.search"
                    [class.error]="!searchReplace.valid"
                    (keyup)="onSearch()"
                    (focus)="onFocus()"
                    (blur)="onBlur()">
            </div>
            <div class="mono">
                {{searchReplace.search}}
                {{searchReplace.status}}
            </div>
            <!--button *ngIf="focus" type="button" (click)="onDone()">Done</button-->
            <button *ngIf="focus" type="button" (click)="onCancel()">Cancel</button>
            <div class="mono">
                <span *ngFor="let result of results" [class.match]="result.match">{{result.text}}</span>
            </div>
        </div>
    `,
    styles: [`
        #textarea {
            border-style: solid;
        }
        .error {
            border-style: solid;
            border-color: red;
        }
        .mono {
            font-family: monospace;
        }
        .match {
            background-color: red;
        }
    `]
})
export class SearchReplaceComponent {

    @Input() text: Text;
    focus: boolean=false;
    results: Result[];

    searchReplace: SearchReplace = {
        search: 'a',
        replace: 'Y',
        valid: true,
        status: ''
    };
    onSearch(): void {
        if (!this.searchReplace.search || this.searchReplace.search.length < 1) return;
        var regexp: RegExp = null;
        try {
            regexp = new RegExp(this.searchReplace.search, 'g');
            this.searchReplace.valid = true;
        }
        catch (Error) {
            this.searchReplace.status = 'INVALID';
            this.searchReplace.valid = false;
            return;
        }
        this.searchReplace.status = 'VALID';
        let results: Result[] = [];
        let str = this.text.text;
        var index: number = 0;
        while (true) {
            let arr = regexp.exec(str);
            if (!arr) break;
            console.log(arr);
            results.push(new Result(
                str.substring(index, arr.index)
            ));
            results.push(new Result(
                arr[0],
                true
            ));
            index = arr.index + arr[0].length;
            //break;
        }
        if (index < str.length) {
            results.push(new Result(
                str.substring(index)
            ));
        }
        console.log(results);
        //TODO split Results with newlines
        this.results = results;
    }
    onFocus(): void {
        this.focus=true;
    }
    onBlur(): void {
        this.focus=false;
    }
    onDone(): void {
    }
    onCancel(): void {
        this.focus=false;
    }

}
export class Result {
    text: string;
    match: boolean;
    group: number;
    constructor(text: string, match?: boolean, group?: number) {
        this.text = text;
        this.match = match;
        this.group = group;
    }
}