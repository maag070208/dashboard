import { ChangeDetectionStrategy, Component, HostListener, NgZone, OnInit } from '@angular/core';
import { NavbarItem } from '../../models/navbar';

@Component({
  selector: 'app-items-nav',
  templateUrl: './items-nav.component.html',
  styleUrls: ['./items-nav.component.css'],

})
export class ItemsNavComponent {
  public width:number = 0;
  public items: Array<NavbarItem> = [
    { icon: 'dashboard', name: 'dashboard', divider: false, link: 'dashboard' },
  ];


  constructor() {this.ScreenSize()}
  @HostListener('window:resize', ['$event'])
  ScreenSize() {
      this.width =  window.innerWidth;
  }

}
