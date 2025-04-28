import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function forbiddenWordsValidator(words: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const found = words.find((word) =>
      control.value.toLowerCase().includes(word.toLowerCase())
    );

    return found ? { forbiddenWord: found } : null;
  };
}
