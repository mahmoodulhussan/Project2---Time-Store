import { Component, OnInit } from '@angular/core';
import { WatchService } from 'src/app/services/watch.service';

import { Observable } from 'rxjs';

import { Watch } from 'src/app/Watch';
@Component({
  selector: 'app-watch-items-container',
  templateUrl: './watch-items-container.component.html',
  styleUrls: ['./watch-items-container.component.css']
})
export class WatchItemsContainerComponent implements OnInit {

//we get data from subject; we need to make this watches as an observable type
//because subject is a type of observable
watches: Observable<Watch[]> = new Observable<Watch[]>();

  constructor(private watchService:WatchService) { }

  ngOnInit(): void {
    //get  all the watches when this compnent in shown in the homepage component
    this.watchService.getWatches();
    //get the data out from subject and save it to watches prop of this class
    //the prop watches of this class is being watch and updated when the dara
    //come back 
    //then pass it to the watch item component and display it on the page
     this.watches = this.watchService.subject;

  }

}
