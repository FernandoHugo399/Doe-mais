import GlobalVars from 'src/app/global/global.model';
import { InstitutionsService } from './../../services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { Institutions } from 'src/app/services/institutions/institutions.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instituicoes',
  templateUrl: './instituicoes.component.html',
  styleUrls: ['./instituicoes.component.scss']
})
export class InstituicoesComponent implements OnInit {
  public institutions!: Institutions
  constructor(private InstitutionsService: InstitutionsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(GlobalVars.messageError) this.showToastr(GlobalVars.messageError)
    this.getAllInstitutions()
  }

  getAllInstitutions(): void {
    this.InstitutionsService.getAllInstitutions()
    .subscribe(
      res => { this.institutions = res },
      err => this.showToastr('Ocorreu ao carregar as instituições')
    )
  }

  showToastr(message: string): void{
    this.toastr.error(message, 'Erro')
  }
}
