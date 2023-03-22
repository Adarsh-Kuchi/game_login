import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  validateInput(inputElement: ElementRef) {
    inputElement.nativeElement.addEventListener('keypress', (event: KeyboardEvent) => {
      const key = event.key;
      const allowedChars = /[a-zA-Z\s]/;

      if (!allowedChars.test(key)) {
        event.preventDefault();
      }
    });
  }

  playerInput(myInputRef: ElementRef) {
    myInputRef.nativeElement.addEventListener('keypress', (event: KeyboardEvent) => {
      const key = event.key;
      const allowedChars = /[1-5]/;
      const currentValue = myInputRef.nativeElement.value;

      if (!allowedChars.test(key) || currentValue.length >= 1) {
        event.preventDefault();
      }
    });

    myInputRef.nativeElement.addEventListener('input', (event: Event) => {
      const currentValue = myInputRef.nativeElement.value;
      if (currentValue.length > 1 || (currentValue.length === 1 && !/[1-5]/.test(currentValue))) {
        myInputRef.nativeElement.value = '';
      }
    });
  }


}
