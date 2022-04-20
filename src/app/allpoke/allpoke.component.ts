import { Component, OnInit } from '@angular/core';
import { PokeallService } from '../pokeall.service';

@Component({
  selector: 'app-allpoke',
  templateUrl: './allpoke.component.html',
  styleUrls: ['./allpoke.component.css']
})
export class AllpokeComponent implements OnInit {

  allPokes: string[] = []

  constructor(private pokeAllService: PokeallService) { }

  ngOnInit(): void {
    this.pokeAllService.showAllPoke().subscribe(allPoke => {
      allPoke.results.forEach(poke => {
        this.allPokes.push(poke.name)
      });
    })
  }

}
