import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

}
