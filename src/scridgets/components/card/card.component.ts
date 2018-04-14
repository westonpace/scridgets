import { Component, ViewChild, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'sc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements DoCheck {

  @ViewChild('double')
  private double?: ElementRef;
  @ViewChild('fullSpan')
  private fullSpan?: ElementRef;
  private paddingLeft = 0;
  private paddingRight = 0;
  private paddingTop = 0;
  private paddingBottom = 0;
  topLine = '';
  lines: string[] = [];

  constructor(private host: ElementRef) {

  }

  getPaddingString() {
    return this.paddingTop + 'px ' + this.paddingRight + 'px ' + this.paddingBottom + 'px ' + this.paddingLeft + 'px';
  }

  ngDoCheck() {
    const doubleElement = (this.double as ElementRef).nativeElement as HTMLElement;
    const doubleBounds = doubleElement.getBoundingClientRect();
    const hostBounds = (this.host.nativeElement as HTMLElement).getBoundingClientRect();
    const widthInChars = hostBounds.width / (doubleBounds.width / 2);
    const intWidthInChars = Math.floor(widthInChars);
    this.topLine = '-'.repeat(intWidthInChars - 4) + '+';
    const numLines = hostBounds.height / doubleBounds.height;
    const numLinesInt = Math.floor(numLines);
    this.lines = [];
    for(let i = 0; i < numLinesInt - 2; i++) {
      this.lines.push('|' + ' '.repeat(intWidthInChars - 2) + '|');
    }
    this.lines.push('+' + '-'.repeat(intWidthInChars - 2) + '+');
    this.paddingLeft = doubleBounds.width / 2;
    const fullSpanElement = (this.fullSpan as ElementRef).nativeElement as HTMLElement;
    const fullSpanWidth = fullSpanElement.getBoundingClientRect().width;
    this.paddingRight = Math.max(this.paddingLeft, hostBounds.width - fullSpanWidth + this.paddingLeft);
    this.paddingTop = doubleBounds.height;
    const allLinesHeight = (this.lines.length + 1) * doubleBounds.height;
    this.paddingBottom = Math.max(0, hostBounds.height - allLinesHeight) + this.paddingTop;
  }

}
