import { Component, OnInit } from '@angular/core';
import { CartitemsService } from 'src/app/cartitems.service';
import images from "../../constants/images";

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss']
})
export class PreHeaderComponent implements OnInit {

  logo = images.logo

  constructor(private cartItemService: CartitemsService) { }

  ngOnInit(): void {
  }

  openCartModal(): void {
    this.cartItemService.toggleModalVisibility(true)
  }

}
