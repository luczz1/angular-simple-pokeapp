import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeModel } from 'src/app/poke.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  pokeID: number;
  pokeStats: PokeModel[];
  prefix: string[] = ['HP: ', 'ATK: ', 'DEF: ', 'Sp A: ', 'Sp D: ', 'Speed: ']

  constructor( private route: ActivatedRoute, private http: HttpClient ) {
    this.route.params.subscribe(params => this.pokeID = params['id']);
}

  ngOnInit(): void {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokeID}`).subscribe((pokeInfosByName: any) => {
      this.pokeStats = [
        {
          pokedexNum: pokeInfosByName.game_indices[4].game_index,
          name: pokeInfosByName.name,
          types: [],
          basestats: [],
        },
      ];
      pokeInfosByName.types.forEach((apiInfos: any) => {
        this.pokeStats[0].types.push(apiInfos.type.name);
      });
      pokeInfosByName.stats.forEach((apiInfos: any) => {
        this.pokeStats[0].basestats.push(apiInfos.base_stat);
      });
    });
  }

}

