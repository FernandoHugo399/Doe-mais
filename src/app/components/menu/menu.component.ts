import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuMobile') menuMobile!: { nativeElement: HTMLDivElement; };
  constructor() { }

  ngOnInit(): void {
    addEventListener('resize', ()=>{
      let menu = this.menuMobile.nativeElement
      if(menu.classList.contains('mobah')) menu.classList.remove('mobah')
    })
  }

  showHideMenu(): void{
    let menu = this.menuMobile.nativeElement
    if(menu.classList.contains('mobah')) menu.classList.remove('mobah')
    else menu.classList.add('mobah')
  }

}
