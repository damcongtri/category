import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-detail-prd',
  templateUrl: './detail-prd.component.html',
  styleUrls: ['./detail-prd.component.css']
})
export class DetailPRDComponent implements OnInit {
  pro: any
  public products: Array<any> = [
    { id: 1, name: 'Áo sơ mi Nam', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKH1sx6hzThouMFEKnhnS1KdAaoHY_1JTc7g&usqp=CAU', price: 10 },
    { id: 2, name: 'Áo Thun Nam', image: 'assets/prd01.jpg', price: 15 },
    { id: 3, name: 'Áo Thun Nam', image: 'assets/prd02.jpg', price: 22 },
    { id: 4, name: 'Áo Polo', image: 'assets/prd03.jpg', price: 30 },
    { id: 5, name: 'Đồng hồ thông minh minion', image: 'assets/prd04.jpg', price: 100 },
    { id: 6, name: 'Đồng hồ', image: 'assets/prd05.jpg', price: 100 },
    { id: 7, name: 'Đồng hồ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSzNuEpz71qw_q4yqPgCRISQ4RoqLOVTIRw&usqp=CAU', price: 100 },
    { id: 8, name: 'Đồng hồ thông minh', image: 'assets/prd06.jpeg', price: 50 },
    { id: 9, name: 'Giày thời trang nữ', image: 'assets/giay01.webp', price: 50 },
    { id: 10, name: 'Giày thời trang nam nữ unisex', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjesbnxyev3cRpf96DeDaWFrrPL2vabMiYiA&usqp=CAU', price: 50 },
    { id: 11, name: 'Giày sneaker nữ ', image: 'assets/giay02.webp', price: 50 },
  ]
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params['id']
    this.pro = this.products.find((prd) => {
      return id == prd.id
    })
  }

}





