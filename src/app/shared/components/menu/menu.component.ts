import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon:  'pi pi-desktop',
        items: [
          {
            label: 'Textos e datas',
            icon:  'pi pi-align-left'
          },
          {
            label: 'Numeros',
            icon:  'pi pi-dollar'
          },
          {
            label: 'Nao comuns',
            icon:  'pi pi-globe'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Outro elemento',
            icon: 'pi pi-cog'
          }
        ]
      }
    ]
  }

}
