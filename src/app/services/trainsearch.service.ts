// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TrainsearchService {

// //   constructor() { }
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Trains } from '../models/trains.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class TrainsearchService {

//   constructor(private http: HttpClient) { }

//   getSearch(source: string, destination: string, departureTime: string): Observable<Trains[]> {
//       const url = `https://localhost:7115/api/Train/GetSearch/${source}/${destination}/${departureTime}`;
//     return this.http.get<Trains[]>(url);
//   }  
//   private trains:BehaviorSubject<any> = new BehaviorSubject<any>(null);

//   setTrains(data:any)
//   {
//     this.trains.next(data);
   
//   }

//   getTrains():Observable<any>
//   {
//     return this.trains.asObservable();
//   }
  
// }