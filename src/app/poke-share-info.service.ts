import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  value: string = '';
  public stringVar = new Subject<string>();

  constructor() {
  }

  getObservable(): Subject<string> {
    return this.stringVar;
  }

  public setValue(newStringVar: string) {
    this.stringVar.next(newStringVar);
  }

  // getValue(): string {
  //   return this.value;
  // }

  // setValue(value: string) {
  //   this.value = value;
  // }


}
