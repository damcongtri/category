import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  pro: Array<any> = []
  products: any
  constructor(private actRoute: ActivatedRoute, private data: Product) {
    this.products = this.data.product
  }

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params['id']
    for (let prd of this.products) {
      if (id == prd.id_category) {
        this.pro.push(prd)
      }
    }
    console.log(this.pro);
  }

}



