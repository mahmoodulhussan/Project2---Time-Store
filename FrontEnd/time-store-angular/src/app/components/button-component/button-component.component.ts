
import { Component, OnInit, Output, EventEmitter, Input,  } from '@angular/core';
import { Order } from 'src/app/Order';
@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
@Input() text:String ='';


@Output() onClickEmittor: EventEmitter <any>= new EventEmitter();


clickEmits():void{





                 
 

  this.onClickEmittor.emit();

}


  constructor() { }

  ngOnInit(): void {
  }

}
