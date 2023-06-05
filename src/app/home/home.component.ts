// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// //import { AuthService } from 'src/app/services/auth.service';
// //import { SearchService } from 'src/app/services/search.service';
// // import Swal from 'sweetalert2'

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   ngOnInit(): void {
    
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TrainsService } from '../services/trains.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  trainSearchForm!: FormGroup;
  //showReturnDate: boolean = false;
  subscription!: Subscription;
  trains: any[] = [];

  constructor(private fb: FormBuilder, private trainsService: TrainsService, private router: Router) { }

  ngOnInit() {
    this.trainSearchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departureTime: [null, Validators.required]
    });
  }
  

  // onRadioChange(event: any) {
  //   this.showReturnDate = event.target.value === 'return';
  // }
  searchTrains() {
    if (this.trainSearchForm.valid) {
      const formValue = this.trainSearchForm.value;
      const departure = formValue.departCity; 
      const arrival = formValue.arrivalCity;
      const departureTime = formValue.departureTime;
      //const returnDate = formValue.returnDate;
  
      this.subscription = this.trainsService.getSearch(departure, arrival, departureTime)
        .subscribe({
          
          next: (data: any[]) => {
          debugger
    
            console.log(data);
            this.trains = data;
            this.trainsService.setTrains(data)
            // Redirect to the search component
            this.router.navigate(['/search']);
          },
          error: (error: any) => {
            console.error('Error:', error);
          }
        });
    } else {
      alert('Please fill out the form before submitting!');
    }
  }
  

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}