import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trains } from 'src/app/models/trains.model';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.css']
})
export class EditTrainComponent implements OnInit {

    trainDetails: Trains = {
      trainId: 0,
      trainName: '',
      source: '',
      destination: '',
      departureTime: new Date(),
      arrivalTime: new Date(),
      availableSeats: 0,
      price: 0
    };

  constructor(private route: ActivatedRoute, private trainService: TrainsService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
      const id = params.get('id');

      if(id) {
        this.trainService.getTrain(Number(id))
        .subscribe({
          next: (response) => {
            this.trainDetails = response;
          }
        })
      }
      }
    })
  }

  editTrain(){
    this.trainService.editTrain(this.trainDetails.trainId, this.trainDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['trains']);
      }
    })
  }

  deleteTrain(id: number) {
    this.trainService.deleteTrain(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['trains']);
      }
    });

  }

}
