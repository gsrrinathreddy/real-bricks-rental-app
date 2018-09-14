import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle="This is component title";

 clickHandler(){
   console.log("welcome to angular 6");
   alert("I am Clicked")
 }

 clickHandler1(){
  console.log("welcome to angular 6");
  alert("I am Clicked")
}

clickHandler2(){
  console.log("welcome to angular 6");
  alert("I am Clicked")
}
 
}
