import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";

@NgModule({
exports: [
  MenubarModule,
  ButtonModule,
  FieldsetModule,
  PanelModule,
  CardModule
]
})
export class PrimengModule {}
