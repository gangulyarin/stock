export class Stock {
    /*code: number;
  price: number;
  previousPrice: number;
  name: string;*/
    positiveChange: boolean;
    favourite:boolean;
    constructor(public code: number,
        public price: number,
        public previousPrice: number,
        public exchange: string,
        public name: string){
            this.favourite=false;
        }
    change=this.isPositiveChange();
    stockClasses={
        "positive":this.change,
        "negative":!this.change,
        "large-change": Math.abs(this.price-this.previousPrice)>10,
        "small-change": (Math.abs(this.price-this.previousPrice)<10)
    };

    isPositiveChange():boolean{
        return this.price>this.previousPrice;
    }
    
}
