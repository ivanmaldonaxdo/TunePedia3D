import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InstrumentsService {
  uri = 'http://127.0.0.1:4000/instruments';
  constructor(private http: HttpClient) {}

  getInstruments():Observable<any>{
    return this.http.get(this.uri);
  }
}
