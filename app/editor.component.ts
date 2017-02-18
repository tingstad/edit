import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'editor',
  template: `<textarea>{{ text }}</textarea>`,
  providers: [FileService]
})
export class EditorComponent  {

    text: string = 'Text goes here';

    constructor(fileService: FileService) {
        this.text = fileService.getFile();
    }
}
