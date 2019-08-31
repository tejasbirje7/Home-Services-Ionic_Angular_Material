import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from "@ionic/angular";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
    declarations: [
    HeaderComponent
  ],
    imports: [
    IonicModule,
    MatToolbarModule
  ],
    exports: [
    HeaderComponent,
    MatToolbarModule
  ]
})
export class ComponentsModule {}