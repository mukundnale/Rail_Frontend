import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trains } from '../models/trains.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  baseApiUrl: string = environment.baseApiUrl; 
  // trains: any;
  trains: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  constructor(private http: HttpClient) { }

  GetAll(): Observable<Trains[]> {
    return this.http.get<Trains[]>(this.baseApiUrl + '/api/Train/GetAll');
  }

  addTrain(addTrainRequest: Trains): Observable<Trains>
  {
    return this.http.post<Trains>(this.baseApiUrl + '/api/Train', addTrainRequest);
  }

  getTrain(id: number): Observable<Trains>{
    return this.http.get<Trains>(this.baseApiUrl + '/api/Train/' + id);
  }

  editTrain(id: number, editTrainRequest: Trains): Observable<Trains>
  {
    return this.http.put<Trains>(this.baseApiUrl + '/api/Train/' + id, editTrainRequest);
  }

  deleteTrain(id: number): Observable<Trains> {
    return this.http.delete<Trains>(this.baseApiUrl + '/api/Train/' + id);
  }

  getSearch(source: string, destination: string, departureTime: string): Observable<Trains[]> {
    const params = new HttpParams()
      .set('source', source)
      .set('destination', destination)
      .set('departureTime', departureTime);

    return this.http.get<Trains[]>(this.baseApiUrl + '/api/Train/GetSearch', { params });
  }

  setTrains(data:any)
  {
    this.trains.next(data);
   
  }
}
