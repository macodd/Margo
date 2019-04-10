import { Directive, HostListener } from '@angular/core';
import { IonCard } from '@ionic/angular';

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective {

  constructor(private card: IonCard) { }

  @HostListener('click') onTap() {
    this.card.color = 'card-back';
  }
}
