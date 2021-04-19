import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items$: Observable<Item[]> | undefined

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items$ = this.itemsService.items$
    this.itemsService.getItems().subscribe()
  }

}
