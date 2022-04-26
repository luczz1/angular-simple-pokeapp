import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-services.service';
import { PokeallService } from '../services/pokeall.service';

@Component({
  selector: 'app-allpoke',
  templateUrl: './allpoke.component.html',
  styleUrls: ['./allpoke.component.css'],
})
export class AllpokeComponent implements OnInit {
  _filterPoke: string;
  allPokes: string[] = []
  filteredPoke: string[] = []
  value = '';
  pokeID: number;
  occult: boolean = false

  get filterPoke(): string {
    return this._filterPoke;
  }

  set filterPoke(value: string) {
    this._filterPoke = value
    this.filteredPoke = this._filterPoke ? this.filterPokes(this.filterPoke) : this.allPokes
  }

  filterPokes(filterBy: string) : any {
    filterBy = filterBy.toLowerCase()
    return this.allPokes.filter(poke => poke.toString().toLowerCase().indexOf(filterBy) !== -1)

  }

  constructor(
    public pokeAllService: PokeallService,
    private genericServices: GenericService,
  ) {}

  ngOnInit(): void {
    this.genericServices.getAllPokes();
    this.allPokes = this.genericServices.allPokes;
  }


  showMoreFunction() {
    if (this.pokeAllService.limit <= 350) {
      this.pokeAllService.showMore().subscribe((allPoke) => {
        allPoke.results.forEach((poke) => {
          this.allPokes.push(poke.name);
          this.pokeAllService.limit++;
        });
      });
    }
  }

  getPokemonBySearch(value: string) {
    this.clearAllPokes();
    this.value = value;
    this.pokeAllService.searchPoke(value).subscribe((searchResult) => {
      this.allPokes.push(searchResult.name);
      this.pokeID = searchResult.id;

      if (this.value == '') {
        this.clearAllPokes();
        this.genericServices.getAllPokes();
        this.allPokes = this.genericServices.allPokes;
      }
    })
  }

  clearAllPokes() {
    this.allPokes = [];
  }

  occultElement() {
    this.filterPoke = ''
    if (this.occult == false){
      this.occult = true
    } else {
      this.occult = false
    }

  }

}
