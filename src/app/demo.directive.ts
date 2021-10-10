import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el:ElementRef) { }
@HostListener('mouseover') onmouseover(){
  this.el.nativeElement.style.color="green"
}
@HostListener('mouseleave') onmouseleave(){
  this.el.nativeElement.style.color="red"
}
}
