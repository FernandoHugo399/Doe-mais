import { IMenuService } from './menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {

  showHideMenu(menu: HTMLDivElement): void {
    document.querySelector('main')!.classList.toggle('blur')
    document.querySelector('footer')!.classList.toggle('blur')
    menu.classList.toggle('mobah')
  }

  resizeHideMenu(menu: HTMLDivElement): void {
    addEventListener('resize', ()=> menu.classList.remove('mobah') )
  }
}
