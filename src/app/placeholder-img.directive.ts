import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPlaceholderImg]'
})
export class PlaceholderImgDirective {
  @Input() appPlaceholderImg: string = '';
  placeholder = './assets/no-user-image.jpg';
  constructor() { }

  @HostListener('error', ['$event']) onError(event: any): void {
    const img: HTMLImageElement = event.target;
    img.src = this.placeholder;
    img.onerror = null;
    console.log(img.src);
    console.log(this.placeholder);
  }

}
