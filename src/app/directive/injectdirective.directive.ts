import { Directive, ViewContainerRef, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInjectdirective]'
})
export class InjectdirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef, private el: ElementRef) {}

}
