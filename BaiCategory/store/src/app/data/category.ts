import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Category {
    category: any;
    constructor() {
        this.category = [
            { id: 1, name: 'Áo' },
            { id: 2, name: 'Đồng hồ' },
            { id: 3, name: 'Giày' },
            { id: 4, name: 'Phụ kiện' },

        ]
    }
}
