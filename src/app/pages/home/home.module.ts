import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage, DialogOverviewExampleDialog } from './home.page';
import { ComponentsModule } from '../../components/component.module';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path:'',
    component: DialogOverviewExampleDialog
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    ComponentsModule,
    MatDialogModule, 
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage,DialogOverviewExampleDialog]
})
export class HomePageModule {}