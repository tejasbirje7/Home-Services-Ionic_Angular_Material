import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProffessionalPage } from './proffessional.page';
import { ComponentsModule } from '../../components/component.module';


const routes: Routes = [
  {
    path: '',
    component: ProffessionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProffessionalPage]
})
export class ProffessionalPageModule {}
