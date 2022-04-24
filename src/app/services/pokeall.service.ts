import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeallService {

  url = 'https://pokeapi.co/api/v2/pokemon'
  limit = 151
  more = 20

  constructor(private http: HttpClient) { }

  showAllPoke(): Observable<any> {
    return this.http.get(`${this.url}?limit=${this.limit}&offset=0`);
  }

  showMore() : Observable<any> {
    return this.http.get(`${this.url}?limit=${this.more}&offset=${this.limit}`);
  }


  searchPoke(value: string) : Observable<any> {
    return this.http.get(`${this.url}/${value}`)
  }
}
