import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SearchReplaceComponent } from './search-replace.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchReplaceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
