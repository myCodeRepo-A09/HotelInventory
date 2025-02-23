import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
  @Input() appHighlight = 'red'; // Accept color input
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
    }
  @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  }
  

