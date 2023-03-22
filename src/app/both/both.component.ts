import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.scss']
})
export class BothComponent implements OnInit {
  @Input() name!: string;
  @Input() data!: { name: string, imageIndex: number };
  @Output() joinClicked = new EventEmitter<void>();
  @Output() createClicked = new EventEmitter<void>();


  constructor( private router:Router) { }

  ngOnInit(): void {
  }


}
