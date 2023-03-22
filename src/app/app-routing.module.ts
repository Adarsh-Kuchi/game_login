import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BothComponent } from './both/both.component';
import { CreateComponent } from './create/create.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { IconsComponent } from './icons/icons.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
