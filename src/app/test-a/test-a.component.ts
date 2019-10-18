import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.css']
})
export class TestAComponent implements OnInit {
  from:number=1;
  to:number=100;
  year:number=1995;
  result:string="";
  leapYearMsg:string="";
  primenumber:number = 20;
  primeNumberMsg:string="";
  primeNumbers:number[]=[];
  patternSize:number=5;
  patternA:String="";
  patternB:String="";

  constructor(private todoService : TodoService) {
    this.onSubmit();
   }

  ngOnInit() {
  }

  onPatternB(){
    var val = this.patternSize;
        var i, j, k;
        this.patternB="";
        this.patternB+="<div>";
        for (i = 1; i <= val; i++)
        {
          this.patternB+="<p>";
            for (j = 1; j <= val - i; j++)
            {
              this.patternB+="<span>&nbsp;</span>"
            }
            for (k = 1; k <= i; k++)
            {
              this.patternB+="<span><b>*</b></span>";
            }
            this.patternB+="</p>";
            this.patternB+="<br/>";
        }
        this.patternB+="</div>";
        console.log(this.patternB);

        console.log(this.patternB);
  }

  onPatternA(){
    var i:number=0, j:number=0;
    //outer loop
    this.patternA="";
    this.patternA="<div>";
    for(i=1; i <= this.patternSize; i++)
     {
     //inner loop
     this.patternA+="<p>";
      for(j=1; j<=i; j++)
     {
      this.patternA+="<span>*</span>";
      }

      this.patternA+="</p>";
    
     }
     this.patternA+="</div>";

     console.log(this.patternA);
  }

  onPrimeNumberSubmit(){

    this.primeNumbers = [];
    for(var i=0; i <= this.primenumber; i++)
    {
      if(this.isPrime(i))
      {
        this.primeNumbers.push(i);
      }
    }  
  }

  isPrime=( n:number) =>
{ 
    if (n <= 1) 
        return false; 

    for (var i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 
      
    return true; 
} 

  onLeapYearSubmit(){
    if(this.year.toString().length < 4)
      return;

    if(((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0))
      this.leapYearMsg = this.year + " is a leap year!";
    else
      this.leapYearMsg = this.year + " is not a leap year!";
      
    console.log("hitt")
  }

  onSubmit(){
    this.result = "";
    for(var i=this.from; i <= this.to; i++)
    {
      if(i % 3 == 0)
        this.result += "Fizz ";
      else if(i % 5 == 0)
        this.result += "Buzz ";
      else
        this.result += i + " ";
    }
  }

}
