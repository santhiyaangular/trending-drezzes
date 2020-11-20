import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }
  @Input() setTextBorder: string;

  @HostBinding('style.border')
  setBorder: string;

  @HostListener('mouseover')
  onMouseOver(){
  this.setBorder= this.setTextBorder;
  }

}
