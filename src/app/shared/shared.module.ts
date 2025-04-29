import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaskEmailPipe } from './pipes/mask-email.pipe';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MaskEmailPipe],
  exports: [ButtonComponent, CommonModule, MaskEmailPipe],
})
export class SharedModule {}
