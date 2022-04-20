import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  url = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getPokemon(pokeName: string) : Observable<any> {
    return this.http.get(`${this.url}/${pokeName}`)
  }
}
