import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumberString: string): string {

    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1,3}|)?(\d{2})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      let code = (match[1] ? `+${match[1]} ` : '');
      return [code, '(', match[2], ') ', match[3], '-', match[4], '-', match[5]].join('');
    }
    return 'not a phone number'
  }

}
