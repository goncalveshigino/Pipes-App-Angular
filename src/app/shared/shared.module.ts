import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent
  ],
})
export class SharedModule {}
