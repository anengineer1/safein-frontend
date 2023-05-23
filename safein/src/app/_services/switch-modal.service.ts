import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchModalService {

  constructor() { }


  $modal = new EventEmitter<any>();
}
