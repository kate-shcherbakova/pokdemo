import {Component, Input} from '@angular/core';
import {PokeDetail} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";
import {PokeAPIServiceService} from "../poke-apiservice.service";

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
  providers: [],
})
export class PokeDetailComponent {
  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));

  }

  ngOnInit(): void {
    // console.log(this.pokeShareInfoService.getValue());
  }
}
