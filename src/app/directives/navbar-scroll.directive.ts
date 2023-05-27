import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]'
})
export class NavbarScrollDirective {

  constructor( private el:ElementRef) { }

  @HostListener('window:scroll') onScroll() {
    if(window.pageYOffset > 100) {
      console.log(window.pageYOffset)
      this.el.nativeElement.style.display = "none"
    }else {
      this.el.nativeElement.style.display = "flex"
    }
  }
}
