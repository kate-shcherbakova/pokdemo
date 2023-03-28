import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeDetail, PokeServiceRes} from "./pokemon";

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {
  constructor(private http: HttpClient) {

  }

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url);

    // this.http.get("https://pokeapi.co/api/v2/pokemon/").subscribe((data) =>
    //   console.log(data)
    // );
  }

  getPokemonInfo(id: string): Observable<PokeDetail> {
    // console.log("URL ", url + id + '/');
    return this.http.get<PokeDetail>(url + id + '/');
  }
}
