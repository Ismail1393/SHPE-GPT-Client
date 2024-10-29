import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Component({
  selector: 'app-shpe-gpt-message-box',
  templateUrl: './shpe-gpt-message-box.component.html',
  styleUrls: ['./shpe-gpt-message-box.component.scss'],
})
export class ShpeGptMessageBoxComponent {
  @Input() messages: any = [];

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedHtml(markdown: string): SafeHtml {
    const html = marked.parse(markdown, { async: false });
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
