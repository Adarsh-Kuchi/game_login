import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  inputForm !: FormGroup;
  value= '';
  check :boolean = true;

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {

  }
  createForm(){
    this.inputForm = this.fb.group(
      {
        name:['' ,[ Validators.required, Validators.pattern(/^\d{6}$/) ]],

      }
    );
  }
  onClick(){
   console.log( this.inputForm.value);


  }
  onInput(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length > 6 ) {
      event.preventDefault(); //
      event.target.value = inputValue.substring(0, 6);
      this.check = false;
    }
  }

}
