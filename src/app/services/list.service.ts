import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ListItems } from '../interface/list-items-interface';
import { LISTITEMS } from '../mock-data/mock-list-items';

@Injectable({
  providedIn: 'root',
})

export class ListService {

  constructor() { }

  getList(): Observable<ListItems[]> {
    return of(LISTITEMS);
  }
}
