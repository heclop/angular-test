import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Sipiderman', 'Ironman','She Hulk','Hulk', 'Thor'];
  public deleteHero?: string;

  removeLatHero(): void{
    this.deleteHero = this.heroNames.pop();
  }
}
