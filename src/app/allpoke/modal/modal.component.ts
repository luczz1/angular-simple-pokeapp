import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/services/generic-services.service';
import { additionalPoke } from 'src/app/shared/additionalpoke.model';
import { PokeModel } from 'src/app/shared/poke.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  name: string;
  pokeStats: PokeModel[];
  additionalPokeStats: additionalPoke[] = [];
  prefix: string[] = ['HP: ', 'ATK: ', 'DEF: ', 'Sp A: ', 'Sp D: ', 'Speed: '];
  crySound: any;
  form: string = 'oficial'

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private genericService: GenericService,
  ) {
    this.route.params.subscribe((params) => (this.name = params['name']));
  }

  ngOnInit(): void {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .subscribe((pokeInfosByName: any) => {
        this.pokeStats = [
          {
            pokedexNum: pokeInfosByName.id,
            name: pokeInfosByName.name,
            types: [],
            basestats: [],
          },
        ];
        this.additionalPokeStats = [
          {
            abilities: [],
            base_experience: pokeInfosByName.base_experience,
            weight: pokeInfosByName.weight,
          },
        ];
        pokeInfosByName.types.forEach((apiInfos: any) => {
          this.pokeStats[0].types.push(apiInfos.type.name);
        });
        pokeInfosByName.stats.forEach((apiInfos: any) => {
          this.pokeStats[0].basestats.push(apiInfos.base_stat);
        }),
          pokeInfosByName.abilities.forEach((apiInfos: any) => {
            this.additionalPokeStats[0].abilities.push(apiInfos.ability.name);
          });
      });
  }

  pokeClicked(value: string) {
    this.genericService.playCrySound(value);
  }

  changeForm(value: any) {
    this.form = value
  }
}
