import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('myInputRef', { static: true })
  inputElement!: ElementRef;
  @ViewChild('inputElement', { static: true })
  myInputRef!: ElementRef;
  InputRef !: ElementRef;
  inputForm !: FormGroup;
  @Input() name!: string;
  @Input() data!: { name: string, imageIndex: number };

  constructor( private fb:FormBuilder , private service:DataService) { }

  ngOnInit(): void {
    this.createForm();
    this.service.validateInput(this.inputElement);
    this.service.playerInput(this.myInputRef);
    // this.inputForm.valueChanges.subscribe(newValues => {
    //      console.log('New values:', newValues)});

  }
  createForm(){
    this.inputForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        player: ['', [Validators.required, Validators.pattern('^[0-9]{1,5}$')]]

      }
    );
  }
  onClick(){
   console.log( this.inputForm.value)

  }

}
