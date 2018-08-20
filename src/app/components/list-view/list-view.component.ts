import { Component, OnInit } from '@angular/core';

import { ListItems } from '../../interface/list-items-interface';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  items: string[];
  listItems: ListItems[];

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.items = ['a', 'b', 'c'];
    this.getList();
  }

  getList(): void {
    this.listService.getList()
        .subscribe(listItems => this.listItems = listItems);
  }
}
