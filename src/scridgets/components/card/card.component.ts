import { Component, ViewChild, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'sc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements DoCheck {

  @ViewChild('double')
  private double?: ElementRef;
  @ViewChild('single')
  private single?: ElementRef;
  private paddingLeftRight = 0;
  fillChars = '';

  constructor(private host: ElementRef) {

  }

  getPaddingString() {
    return '16px ' + this.paddingLeftRight + 'px';
  }

  ngDoCheck() {
    const doubleElement = (this.double as ElementRef).nativeElement as HTMLElement;
    const doubleBounds = doubleElement.getBoundingClientRect();
    console.log('getBoundingClientRect().width=' + doubleElement.getBoundingClientRect().width);
    const singleElement = (this.single as ElementRef).nativeElement as HTMLElement;
    const singleBounds = singleElement.getBoundingClientRect();
    console.log('singleBounds=' + singleBounds.width);
    const hostBounds = (this.host.nativeElement as HTMLElement).getBoundingClientRect();
    const widthInChars = hostBounds.width / (doubleBounds.width / 2);
    console.log('widthInChars=' + widthInChars);
    const intWidthInChars = Math.floor(widthInChars);
    console.log('intWidthInChars=' + intWidthInChars);
    this.fillChars = '-'.repeat(intWidthInChars - 4) + '+';
    console.log('Adding ' + this.fillChars.length + ' characters');
    this.paddingLeftRight = doubleBounds.width / 2;
  }

}
