import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetButton()">Reset</button>
  <button (click)="increaseBy(+1)">+1</button>

  `
})
export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy( value: number):void {
   this.counter += value;
  }

  resetButton():void {
   this.counter = 10;
  }
}
