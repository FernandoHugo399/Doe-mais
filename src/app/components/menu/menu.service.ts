import { IMenuService } from './menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  resizeHideMenu(menu: HTMLDivElement): void {
    addEventListener('resize', ()=>{ if(menu.classList.contains('mobah')) menu.classList.remove('mobah') })
  }

  showHideMenu(menu: HTMLDivElement): void {
    if(menu.classList.contains('mobah')) menu.classList.remove('mobah')
    else menu.classList.add('mobah')
  }
}
