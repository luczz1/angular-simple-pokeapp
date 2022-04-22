import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-services.service';
import { PokeallService } from '../services/pokeall.service';

@Component({
  selector: 'app-allpoke',
  templateUrl: './allpoke.component.html',
  styleUrls: ['./allpoke.component.css'],
})
export class AllpokeComponent implements OnInit {
  allPokes: string[] = [];
  value = '';
  pokeID: number;
  backgroundClass: string = 'bg-light'
  textClass: string = 'text-dark'
  occult: boolean = false

  constructor(
    public pokeAllService: PokeallService,
    private genericServices: GenericService,
  ) {}

  ngOnInit(): void {
    this.genericServices.getAllPokes();
    this.allPokes = this.genericServices.allPokes;
  }


  darkModePage() {
    if(this.backgroundClass == 'bg-light') {
      this.backgroundClass = 'bg-dark'
      this.textClass = 'text-light'
    } else {
      this.backgroundClass = 'bg-light'
      this.textClass = 'text-dark'
    }
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

  // searchBarValue(value: string) {
  //   this.clearAllPokes();
  //   this.value = value;
  //   this.pokeAllService.searchPoke(value).subscribe((searchResult) => {
  //     this.allPokes.push(searchResult.name);
  //     this.pokeID = searchResult.id;

  //     if (this.value == '') {
  //       this.clearAllPokes();
  //       this.genericServices.getAllPokes();
  //       this.allPokes = this.genericServices.allPokes;
  //     }
  //   });
  // }

  clearAllPokes() {
    this.allPokes = [];
  }

  occultElement() {
    if (this.occult == false){
      this.occult = true
    } else {
      this.occult = false
    }

  }

}
