import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicalInstResp } from '../models/musicalInstrument';
@Injectable({
  providedIn: 'root',
})
export class InstrumentsService {
  uri = 'http://127.0.0.1:4000';
  constructor(private http: HttpClient) {}

  getInstruments(){
    return this.http.get<MusicalInstResp[]>(`${this.uri}/instruments`);
  }
  getInstrument(name: string){
    return this.http.get<MusicalInstResp[]>(`${this.uri}/instruments/${name}`)
  }
  getURLFile(file_name: string)
  {
    if (file_name == "") {
      return ""
    }
    console.log( `${this.uri}/models/${file_name}`);
    
    return `${this.uri}/models/${file_name}`
  }
}
