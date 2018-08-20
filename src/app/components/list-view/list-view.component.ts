import { Component, OnInit } from '@angular/core';

import { ListItems } from '../../interface/list-items-interface';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  listItems: ListItems[];

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.listService.getList()
        .subscribe(listItems => {
          const result = listItems.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();
            return titleA > titleB ? 1 : -1;
          });
          return this.listItems = result;
        });
  }
}
