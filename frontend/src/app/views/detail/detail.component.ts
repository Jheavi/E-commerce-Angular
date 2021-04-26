import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { computed, observable } from 'mobx-angular';
import { CartitemsService } from 'src/app/cartitems.service';
import { Item,Size } from 'src/app/item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @observable item?: Item
  productName: string = ''
  isFixedName: boolean = false
  selectedImage: string = ''
  selectedSize: Size = { size: '0', available: false}



  @computed get discount(): number {
    return this.item && this.item['actual-price']
    ? Math.round((1 - +this.item['actual-price'] / +this.item['original-price']) * 100)
    : 0
  }

  selectImage(image: string): void {
    this.selectedImage = image
  }

  selectSize(size: Size): void {
    if (size.available) {
      this.selectedSize = size
    }
  }

  findSizeAvailable(itemSize: Size): boolean {
    return itemSize.available
  }

  constructor(
    private itemsService: ItemsService,
    private cartItemsService: CartitemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItem()
  }

  getItem(): void {
    this.productName = this.route.snapshot.paramMap.get('productName')?.replace(/-/g, ' ') || ''
    this.isFixedName = JSON.parse(this.route.snapshot.queryParams['fixed-name'])
    this.itemsService.getItem(this.productName, this.isFixedName)
    .subscribe(item => {
      this.item = item
    })
  }

  addItemToCart(item: Item): void {
    this.cartItemsService.addItemToCart(item).subscribe()
  }
}
