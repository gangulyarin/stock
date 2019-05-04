import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  @Input()
  stock: Stock;
  stockClasses;

  @Output()
  stockEmitter = new EventEmitter<Stock>();

  constructor() { }

  ngOnInit() {
    /*this.code=1;
    this.name="StockName 1";
    this.price=22.50;
    this.previousPrice=21;
    this.positiveChange=(this.price>this.previousPrice);
    this.favourite=false;*/
    
    
    
    //console.log(this.stockClasses);
  }

  toggleFavourite(){
    this.stock.favourite = !this.stock.favourite;
    this.stockEmitter.emit(this.stock);
}

}
