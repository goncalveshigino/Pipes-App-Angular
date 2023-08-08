import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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


  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
     setTimeout(() => {
       resolve('Temos dados em uma Promessa')
       console.log('Temos dados em uma Promessa');
     }, 3500);
  })

}
