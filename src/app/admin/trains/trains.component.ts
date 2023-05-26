import { Component, OnInit } from '@angular/core';
import { Trains } from 'src/app/models/trains.model';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  trains: Trains[] =[];

  constructor(private trainsService: TrainsService) {}

  ngOnInit(): void{
    this.trainsService.GetAll()
    .subscribe({
      next: (trains) => {
        //console.log(trains);
        this.trains = trains;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
