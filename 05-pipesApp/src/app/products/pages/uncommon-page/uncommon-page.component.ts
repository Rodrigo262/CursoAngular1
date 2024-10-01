import { Component } from '@angular/core';
import { interval, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Rodrigo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18n Plural

  public clients: string[] = [
    'Maria',
    'Rodrigo',
    'Eduardo',
    'Melisa',
    'Isabel',
    'Paco',
    'Pablo',
    'Jaime',
    'Ana',
    'Eva',
  ];

  public clientsMap: { [key: string]: string } = {
    '=0': 'no tenemos ningún clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  deleteClients(): void {
    this.clients.shift();
  }

  //i18n KeyValue

  public person = {
    name: 'Rodrigo',
    age: '29',
    address: 'Ottawa, Canadá',
  };

  //i18n Async

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  //La promesa no se puede cancelar y sigue corriendo
  public promiseValue: Promise<string> = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  );
}
