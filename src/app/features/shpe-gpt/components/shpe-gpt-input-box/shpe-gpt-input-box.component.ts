import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-shpe-gpt-input-box',
  templateUrl: './shpe-gpt-input-box.component.html',
  styleUrls: ['./shpe-gpt-input-box.component.scss'],
})
export class ShpeGptInputBoxComponent {
  @Input() isLoading: boolean = false;
  @Output() onMessageSend = new EventEmitter<string>();
  message: string = '';

  sendMessage() {
    if (this.message.trim()) {
      this.onMessageSend.emit(this.message.trim());
      this.message = '';
    }
  }
}
