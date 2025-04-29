import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail',
})
export class MaskEmailPipe implements PipeTransform {
  transform(value: string): string {
    if (!value.includes('@')) return value;
    const [user, domain] = value.split('@');
    const maskedUser = user.slice(0, 2) + '***';
    return `${maskedUser}@${domain}`;
  }
}
