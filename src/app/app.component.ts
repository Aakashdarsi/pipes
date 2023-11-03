import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string=''
  date:Date=new Date();
  currency:number=0;
  onNameChange(value:string)
  {
    this.name=value;
  }
  onCurrencyChange(amount:string)
  {
    this.currency = parseFloat(amount);
  }
}
