import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShpeGPTPageComponent } from './pages/shpe-gpt-page/shpe-gpt-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ShpeGptMessageBoxComponent } from './components/shpe-gpt-message-box/shpe-gpt-message-box.component';
import { ShpeGptInputBoxComponent } from './components/shpe-gpt-input-box/shpe-gpt-input-box.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/core/core.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ShpeGPTPageComponent,
    ShpeGptMessageBoxComponent,
    ShpeGptInputBoxComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    CoreModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule
  ],
})
export class ShpeGPTModule {}
