import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorComponent } from './editor.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
