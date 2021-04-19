import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item-list-detail',
  templateUrl: './item-list-detail.component.html',
  styleUrls: ['./item-list-detail.component.scss']
})
export class ItemListDetailComponent implements OnInit {

  @Input() item!: Item

  constructor() { }

  ngOnInit(): void {
  }

}
