import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tob64',
})
export class Tob64Pipe implements PipeTransform {
  constructor(private DSinitizer: DomSanitizer) {}

  transform(image: string) {
    // Format the image SRC:  data:{mime};base64,{data};
    const img = `background-image: url(${image});`;
    const imgURL = this.DSinitizer.bypassSecurityTrustUrl(img);

    if (image === '') {
      return `https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`;
    } else {
      return imgURL;
    }
  }
}
