import { Component } from '@angular/core';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css']
})
export class UnCommonPageComponent {

  //i18n Select
  public name: string = 'Higino';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Lidia',
    this.gender = 'female'
  }

  //i18nPlural
  public clientes: string[] = ['Higino','Katia','Lidia','Neidy','Gloria','Deolinga','Katiavala','Douglas'];
  public clientsMap = {
  '=0': 'nao temos nenhum cliente esperando',
  '=1': 'temos um cliente esperando',
  '=2': 'temos 2 pessoas esperando',
  'other': 'temos # clientes esperando.'
  }

  deleteClient():void {
    this.clientes.shift();
  }


  //KeyValue Pipe
  public person = {
    name: 'Higino',
    age: 26,
    address: 'Angola-Menongue'
  }

}
