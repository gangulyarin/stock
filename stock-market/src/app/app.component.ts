import { Component } from '@angular/core';
import { Stock } from './model/stock';
import { Observable } from 'rxjs';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-market';
  //stocks: Stock[];
  stocks: Observable<Stock[]>;
  favouriteStocks: Stock[]=[];

  constructor(private stockService: StockService){}

  ngOnInit(){
    /*this.stocks = this.stockService.getStocks().subscribe(
      stocks=>{
        this.stocks=stocks;
      }
    );*/
    this.stocks = this.stockService.getStocks();
    console.log(this.stocks);
  }

  addToFavourite(stock: Stock){
    if(stock.favourite){
      this.favouriteStocks.push(stock);
    }
    else{
      this.favouriteStocks.splice(this.favouriteStocks.findIndex((element)=> element==stock),1);
    }
    //console.log(this.favouriteStocks);
  }

  addComponent(stock:Stock){
    //this.stocks.push(stock);
    this.stockService.createStock(stock).subscribe((res)=>{
      this.stocks = this.stockService.getStocks();
    });
    
    //console.log(JSON.stringify(this.stocks));
  }
}
