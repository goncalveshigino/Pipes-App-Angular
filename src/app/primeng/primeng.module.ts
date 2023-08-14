import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
exports: [
  MenubarModule,
  ButtonModule,
  FieldsetModule,
  PanelModule,
  CardModule,
  ToolbarModule
]
})
export class PrimengModule {}
