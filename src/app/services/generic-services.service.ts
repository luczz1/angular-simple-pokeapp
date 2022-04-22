import { Injectable } from '@angular/core';
import { PokeallService } from './pokeall.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  allPokes: string[] = [];
  crySound: any;

  constructor(private pokeAllService: PokeallService) { }

  getAllPokes() {
    this.allPokes = []
    this.pokeAllService.showAllPoke().subscribe((allPoke) => {
      allPoke.results.forEach((poke) => {
        this.allPokes.push(poke.name);
      });
    });
  }

  playCrySound(value: string) {
    this.crySound = new Audio();
    this.crySound.src = `https://play.pokemonshowdown.com/audio/cries/${value}.mp3`;
    this.crySound.volume = 0.1
    this.crySound.load();
    this.crySound.play();
  }


}
