import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'proyect-store';

  items= ['alfredo','alfred','diaz']

  power= 10;

  
  addItem(){
      this.items.push('nuevo elemento')
  }

  deleteItem(index: number){
      this.items.splice(index,1)
  }

}
