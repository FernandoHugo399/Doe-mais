import { MenuService } from './menu.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuMobile') menuMobile!: { nativeElement: HTMLDivElement; };
  constructor(private MenuService: MenuService) { }

  ngOnInit(): void { this.MenuService.resizeHideMenu(this.menuMobile.nativeElement) }

  showHideMenu(): void{ this.MenuService.showHideMenu(this.menuMobile.nativeElement) }

}
