import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaskEmailPipe } from './pipes/mask-email.pipe';
import { ColorChangerDirective } from './directives/color-changer.directive';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MaskEmailPipe, ColorChangerDirective],
  exports: [
    ButtonComponent,
    CommonModule,
    MaskEmailPipe,
    ColorChangerDirective,
  ],
})
export class SharedModule {}
