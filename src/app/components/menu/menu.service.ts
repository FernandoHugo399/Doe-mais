import { IMenuService } from './menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  showHideMenu(menu: HTMLDivElement): void {
    menu.classList.toggle('mobah')
  }

  resizeHideMenu(menu: HTMLDivElement): void {
    addEventListener('resize', ()=> menu.classList.remove('mobah') )
  }
}
