import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trains } from '../models/trains.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  baseApiUrl: string = environment.baseApiUrl; 

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
}
