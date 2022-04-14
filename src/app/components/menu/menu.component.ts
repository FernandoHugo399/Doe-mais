import { MenuService } from './menu.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChild('menuMobile') menuMobile!: { nativeElement: HTMLDivElement; };
  constructor(private MenuService: MenuService) { }

  showHideMenu(): void{
    this.MenuService.showHideMenu(this.menuMobile.nativeElement)
    this.MenuService.resizeHideMenu(this.menuMobile.nativeElement)
  }


}
