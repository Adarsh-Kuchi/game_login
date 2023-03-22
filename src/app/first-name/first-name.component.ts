import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

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

  constructor( private fb:FormBuilder , private service:DataService) { }

  ngOnInit(): void {
    this.createForm();
    this.service.validateInput(this.myInputRef)
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
