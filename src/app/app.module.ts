import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { IconsComponent } from './icons/icons.component';
import { JoinComponent } from './join/join.component';
import { CreateComponent } from './create/create.component';
import { BothComponent } from './both/both.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    IconsComponent,
    JoinComponent,
    CreateComponent,
    BothComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
