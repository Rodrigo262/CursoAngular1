import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css',
})
export class BasicsPagesComponent {
  public nameLower: string = 'rodrigo';
  public nameUpper: string = 'RODRIGO';
  public fullName: string = 'rOdRigO dÍaZ';

  public customDate: Date = new Date();
}
