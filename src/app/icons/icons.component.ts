import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() name!: string;
  @Output() submitted = new EventEmitter<number>();

  images = [
    'assets/image1.svg',
    'assets/image2.svg',
    'assets/image3.svg',
    'assets/image4.svg',
    'assets/image5.svg'
  ]

  constructor() { }

  ngOnInit(): void {
  }
  selectedImageIndex = -1 ;

  onImageClick(i:number){
    this.selectedImageIndex = i;
    console.log('selected image index : ' + this.selectedImageIndex);



  }
  onClick(){
    if(this.selectedImageIndex != -1){
      this.submitted.emit(this.selectedImageIndex);
      

    }

  }

}
