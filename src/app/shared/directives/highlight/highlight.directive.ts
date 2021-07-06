import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigtligth]'
})
export class HigtligthDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'blue';
   }

}
