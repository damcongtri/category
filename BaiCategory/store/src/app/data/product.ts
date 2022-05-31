import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Product {
    product: any;
    constructor() {
        this.product = [
            { id_category: 1, id: 1, name: 'Áo sơ mi Nam', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKH1sx6hzThouMFEKnhnS1KdAaoHY_1JTc7g&usqp=CAU', price: 10 },
            { id_category: 1, id: 2, name: 'Áo Thun Nam', image: 'assets/prd01.jpg', price: 15 },
            { id_category: 1, id: 3, name: 'Áo Thun Nam', image: 'assets/prd02.jpg', price: 22 },
            { id_category: 1, id: 4, name: 'Áo Polo', image: 'assets/prd03.jpg', price: 30 },
            { id_category: 2, id: 5, name: 'Đồng hồ thông minh minion', image: 'assets/prd04.jpg', price: 100 },
            { id_category: 2, id: 6, name: 'Đồng hồ', image: 'assets/prd05.jpg', price: 100 },
            { id_category: 2, id: 7, name: 'Đồng hồ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSzNuEpz71qw_q4yqPgCRISQ4RoqLOVTIRw&usqp=CAU', price: 100 },
            { id_category: 2, id: 8, name: 'Đồng hồ thông minh', image: 'assets/prd06.jpeg', price: 50 },
            { id_category: 3, id: 9, name: 'Giày thời trang nữ', image: 'assets/giay01.webp', price: 50 },
            { id_category: 3, id: 10, name: 'Giày thời trang nam nữ unisex', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjesbnxyev3cRpf96DeDaWFrrPL2vabMiYiA&usqp=CAU', price: 50 },
            { id_category: 3, id: 11, name: 'Giày sneaker nữ ', image: 'assets/giay02.webp', price: 50 },
        ]
    }
}
