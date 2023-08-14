import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
    OrderComponent,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ],
})
export class ProductsModule {}
