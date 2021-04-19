import { Component, OnInit } from '@angular/core';
import images from "../../constants/images";

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss']
})
export class PreHeaderComponent implements OnInit {

  logo = images.logo

  constructor() { }

  ngOnInit(): void {
  }

}
