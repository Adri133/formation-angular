import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanger]',
})
export class ColorChangerDirective {
  private colors: string[] = ['red', 'blue', 'green', 'orange', 'purple'];

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const randomColor =
      this.colors[Math.floor(Math.random() * this.colors.length)];
    this.el.nativeElement.style.color = randomColor;
  }
}
