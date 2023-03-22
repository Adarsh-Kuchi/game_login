import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.scss']
})
export class FirstNameComponent implements OnInit {
  @ViewChild('myInputRef', { static: true })
  myInputRef!: ElementRef;
  inputForm !: FormGroup;
  submittedValue!:string;
  formSubmitted = false;
  @Output() submitted = new EventEmitter<string>();

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.myInputRef.nativeElement.addEventListener('keypress', (event: KeyboardEvent) => {
      const key = event.key;
      const allowedChars = /[a-zA-Z\s]/;

      if (!allowedChars.test(key)) {
        event.preventDefault();
      }
    });
  }
  createForm(){
    this.inputForm = this.fb.group(
      {
        name:['' , [Validators.required , Validators.pattern('^[a-zA-Z ]*$')]],
      }
    );
  }
  onClick(){
   console.log( this.inputForm.value);
   if (this.inputForm.valid) {
    this.submitted.emit(this.inputForm.value.name);
    this.submittedValue = this.inputForm.value.name;
    this.formSubmitted = true;
  }


  }


}
