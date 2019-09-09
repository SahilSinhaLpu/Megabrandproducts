import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MegabrandProducts';
  photo : string;
  imageArray : string[];
  index : number;
  timer : any;

  constructor() {
    this.imageArray = [
        "../assets/homepage.jpg"
    ,   "../assets/homepage2.jpg"
    ];
    this.index = 0;
    this.photo = this.imageArray[0];

    this.timer = setInterval( () => {
        this.index = this.index + 1;
        if (this.imageArray === undefined) 
            console.log("imageArrayNotPresent");
        else if(this.index == this.imageArray.length) 
            this.index = 0;
        this.photo = this.imageArray[this.index];
    }, 10000);
  }

}
