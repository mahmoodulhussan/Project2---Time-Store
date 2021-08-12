import { Component, OnInit, Input } from '@angular/core';
import { Watch } from 'src/app/Watch';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

@Input() watch:Watch = { 
  id:0,
  name: "",
  price:0,
  description: ""
};



  constructor() { }

  ngOnInit(): void {
  }

}
