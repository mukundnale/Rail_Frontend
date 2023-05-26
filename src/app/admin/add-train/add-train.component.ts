import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trains } from 'src/app/models/trains.model';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  addTrainRequest: Trains = {
    trainId: 0,
    trainName: '',
    source: '',
    destination: '',
    departureTime: new Date(),
    arrivalTime: new Date(),
    availableSeats: 0,
    price: 0
  };

  constructor(private trainService: TrainsService, private router: Router) {}

  ngOnInit(): void{
    
  }

  addTrain(){
    //console.log(this.addTrainRequest);
    this.trainService.addTrain(this.addTrainRequest)
    .subscribe({
      next: (train) => {
        //console.log(train);
        this.router.navigate(['/trains']);
      }
  });
  }

}
