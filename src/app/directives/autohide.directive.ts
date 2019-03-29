import { Directive, HostListener, Renderer, ElementRef, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Directive({
  selector: '[appAutohide]'
})
export class AutohideDirective implements OnInit {

  fabToHide;
  oldScrollTop = 0;

  constructor(private renderer: Renderer, private element: ElementRef, private content: IonContent) {
    console.log('hey directive!');

   }

   ngOnInit () {
    this.fabToHide = this.element.nativeElement.getElementsByClassName('top')[0];
    this.renderer.setElementStyle(this.fabToHide, 'webkitTransition', 'opacity 500ms');
  }

   @HostListener('ionScroll') onContentScroll(e) {
      // console.log(e);
      this.content.getScrollElement()
      .then(element => {
          // console.log(element);
      if (element.scrollTop - this.oldScrollTop > 10 ) {
        console.log('down');
        this.renderer.setElementStyle(this.fabToHide, 'opacity', '0');
      } else {
        console.log('top');
        this.renderer.setElementStyle(this.fabToHide, 'opacity', '1');
      }
      });

   }


}
