import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item-list-detail',
  templateUrl: './item-list-detail.component.html',
  styleUrls: ['./item-list-detail.component.scss']
})
export class ItemListDetailComponent implements OnInit {

  @Input() item!: Item

  itemNameWithHiphens: string | undefined


  constructor() { }

  ngOnInit(): void {
    this.itemNameWithHiphens = this.item['fixed-name']
    ? this.item['fixed-name'].replace(/ /g, '-')
    : this.item.name.replace(/ /g, '-')
  }

}
