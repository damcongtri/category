import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/data/category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  item: any
  constructor(private data: Category, private actRouter: ActivatedRoute) {
    this.item = this.data.category
  }

  ngOnInit(): void {
  }

}
