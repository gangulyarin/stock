import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StockService } from '../../services/stock.service';



@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock-reactive.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent  {

  public stock: Stock;

  //public nameControl = new FormControl();

  public stockForm: FormGroup;

  @Output()
  newStock = new EventEmitter<Stock>();
  constructor(private fb: FormBuilder, private stockService : StockService) {
    this.createForm();
    //this.stock = new Stock(50,0,0,"Test");
    this.stock = this.stockService.getStocks()[0];
   }

   createForm(){
     this.stockForm=this.fb.group({
        name: new FormControl(null,Validators.required),
        code: new FormControl(null,[Validators.required, Validators.minLength(2)]),
        price: new FormControl(null, Validators.required)
      });
   }


   loadFromServer(){
     //this.stock= new Stock(50,0,0,"Test1");
     this.stock = this.stockService.getStocks()[0];
     let stockFormModel = Object.assign({},this.stock);
     delete stockFormModel.previousPrice;
     delete stockFormModel.favourite;
     this.stockForm.setValue(stockFormModel);
   }


   patch(){
    /*this.stock= new Stock(50,0,0,"Test2");
    this.stockForm.patchValue(this.stock);*/
    this.stockService.toggleFavourite(this.stock);
   }

   submitStock(){
    this.newStock.emit(Object.assign({},this.stockForm.value));
   }

   setStockPrice(price){
     this.stock.price=price;
     this.stock.previousPrice=price;
   }

  createStock(stockForm){
    //if(stockForm.valid)
      this.newStock.emit(Object.assign({},this.stock));
  }

}
