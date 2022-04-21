import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PokeModel } from '../shared/poke.model';

@Component({
  selector: 'app-poke-panel',
  templateUrl: './poke-panel.component.html',
  styleUrls: ['./poke-panel.component.css'],
})
export class PokePanelComponent implements OnInit {
  pokeStats: PokeModel[];
  imgUrl: string = '';
  prefix: string[] = ['HP: ', 'ATK: ', 'DEF: ', 'Sp A: ', 'Sp D: ', 'Speed: ']

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {}
  pokePesquisaFunction(value: string) {
    this.pokeApiService.getPokemon(value).subscribe((pokeInfosByName) => {
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
      this.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokeStats[0].pokedexNum}.png`;
    });
  }
}
