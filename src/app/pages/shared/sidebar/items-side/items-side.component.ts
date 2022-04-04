import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../models/sidebar';

@Component({
  selector: 'app-items-side',
  templateUrl: './items-side.component.html',
  styleUrls: ['./items-side.component.css']
})
export class ItemsSideComponent implements OnInit {
  public items: Array<SidebarItem> = [
    { icon: 'dashboard', name: 'Dashboard',divider: false,link: 'dashboard' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
