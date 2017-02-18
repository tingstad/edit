import { Component } from '@angular/core';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><editor>foo</editor>`,
})
export class AppComponent  { name = 'My Angular'; }
