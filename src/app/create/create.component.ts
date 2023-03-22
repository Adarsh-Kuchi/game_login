import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  inputForm !: FormGroup;

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.inputForm = this.fb.group(
      {
        name:['' , [Validators.required , Validators.pattern('^[a-zA-Z ]*$')]],

      }
    );
  }
  onClick(){
   console.log( this.inputForm.value)

  }

}
