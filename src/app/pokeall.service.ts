import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeallService {

  url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

  constructor(private http: HttpClient) { }

  showAllPoke(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
