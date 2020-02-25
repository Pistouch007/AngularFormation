import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBorderDirective]'
})
export class HoverBorderDirectiveDirective {

  private borderColor: string;

  @Input()
  private color: string;

  constructor(private el: ElementRef) {
    console.log("tototot");
    this.borderColor = el.nativeElement.style.border;
   }

   @HostListener('mouseleave')
   onMouseLeave(){
   this.el.nativeElement.style.border = 'solid 4px' + this.color;
   }
}

