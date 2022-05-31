import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/product';
// import MyData from 'src/app/my-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pro: any
  constructor(private actRoute: ActivatedRoute, private data: Product) {
    this.pro = this.data.product
  }

  ngOnInit(): void {

  }

}

function xemthem(): void {

}
