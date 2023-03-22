import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentComponent = 'first';
  listComponentName = '';
  listComponentImageIndex = -1;
  bothComponentData = { name: '', imageIndex: -1 };
  createComponentData = { name: '', imageIndex: -1 }
  joinComponentData = { name: '', imageIndex: -1 }

  onFirstComponentSubmit(name: string) {
    this.listComponentName = name;
    this.currentComponent = 'icons';

  }

  onListComponentSubmit(imageIndex: number) {
    this.listComponentImageIndex = imageIndex;
    this.currentComponent = 'both';
    this.bothComponentData = { name: this.listComponentName, imageIndex: this.listComponentImageIndex };
    this.joinComponentData = { name: this.listComponentName, imageIndex: this.listComponentImageIndex }
    this.createComponentData = { name: this.listComponentName, imageIndex: this.listComponentImageIndex }

  }

  onBothComponentJoin() {
    this.currentComponent = 'join';


  }

  onBothComponentCreate() {
    this.currentComponent = 'create';


  }
  onJoinComponentBack() {
    this.currentComponent = 'both';
  }

  onCreateComponentBack() {
    this.currentComponent = 'both';
  }

  onBackButtonClick() {
    if (this.currentComponent === 'icons') {
       console.log('Back button clicked');
      this.currentComponent = 'first';
      console.log('Back button clicked');
    } else if (this.currentComponent === 'both') {
      this.currentComponent = 'icons';
    } else {
      this.currentComponent = 'both';
    }
  }
}
