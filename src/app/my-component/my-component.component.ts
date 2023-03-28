import {Component} from '@angular/core';
import {PokeDetail, Pokemon} from "../pokemon";
import {PokeAPIServiceService} from "../poke-apiservice.service";
import {PokeShareInfoService} from "../poke-share-info.service";
import './my-component.component.css';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService],
})
export class MyComponentComponent {
  id: string = '';
  pokes: Pokemon[] = [];
  selectedPokeId: string = '';
  // selectedPokeUrl: string = '';
  searchPokeName = '';
  pokeDetail: PokeDetail | undefined;

  constructor(private pokeService: PokeAPIServiceService,
              private pokeShareInfoService: PokeShareInfoService) {
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      const res = data.results as any[];
      res.forEach((e, index) => {
        this.pokes.push(new Pokemon(String(index), e.name, e.url));
      })
    });
  }

  go() {

    // this.pokeShareInfoService.setValue("HI");
    if (this.selectedPokeId != '') {
      let actualPokeId = String(+this.selectedPokeId + 1);
      this.pokeService.getPokemonInfo(actualPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
