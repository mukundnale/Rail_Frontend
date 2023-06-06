// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-trainsearch',
//   templateUrl: './trainsearch.component.html',
//   styleUrls: ['./trainsearch.component.css']
// })
// export class TrainsearchComponent {

// }

import { Component } from '@angular/core';
import { TrainsService } from '../services/trains.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trains } from '../models/trains.model';

@Component({
  selector: 'app-trainsearch',
  templateUrl: './trainsearch.component.html',
  styleUrls: ['./trainsearch.component.css']
})

export class TrainSearchComponent {

  trains: Trains[] = [] ;
  showPassengerForm: boolean = false;
  passengerForm: FormGroup;
  messagesLeft: string[] = [
    'Custom message 1',
    'Custom message 2',
    'Custom message 3'
  ];

  messagesRight: string[] = [
    'Custom message 4',
    'Custom message 5',
    'Custom message 6'
  ];

  constructor(private trainsService: TrainsService, private fb: FormBuilder) {
    this.passengerForm = this.fb.group({
      passengerName: ['', Validators.required],
      passengerAge: ['', Validators.required]
    });
    this.trainsService.GetAll().subscribe
    ((res) => {this.trains = res
    console.log(this.trains);
  });
  
  }

  

  bookTrain(train: any): void {
    this.showPassengerForm = true;
  }
}