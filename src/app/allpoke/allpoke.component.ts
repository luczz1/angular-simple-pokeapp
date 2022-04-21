import { Component, OnInit } from '@angular/core';
import { PokeallService } from '../pokeall.service';

@Component({
  selector: 'app-allpoke',
  templateUrl: './allpoke.component.html',
  styleUrls: ['./allpoke.component.css'],
})
export class AllpokeComponent implements OnInit {
  allPokes: string[] = [];
  value = '';
  pokeID: number;

  constructor(private pokeAllService: PokeallService) {}

  ngOnInit(): void {
    this.pokeAllService.showAllPoke().subscribe((allPoke) => {
      allPoke.results.forEach((poke) => {
        this.allPokes.push(poke.name);
      });
    });
  }

  showMoreFunction() {
    if (this.pokeAllService.limit <= 898) {
      this.pokeAllService.showMore().subscribe((allPoke) => {
        allPoke.results.forEach((poke) => {
          this.allPokes.push(poke.name);
          this.pokeAllService.limit++
        });
      });
    }
  }

  searchBarValue(value: string) {
    this.allPokes = [];
    this.value = value;
    this.pokeAllService.searchPoke(value).subscribe((searchResult) => {
      this.allPokes.push(searchResult.name);
      this.pokeID = searchResult.id;
      if (this.value == '') {
        this.allPokes = [];
        this.pokeAllService.showAllPoke().subscribe((allPoke) => {
          allPoke.results.forEach((poke) => {
            this.allPokes.push(poke.name);
          });
        });
      }
    });
  }
}
