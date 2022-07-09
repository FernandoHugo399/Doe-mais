import { InstitutionsService } from './../../services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { Institutions } from 'src/app/services/institutions/institutions.model';

@Component({
  selector: 'app-instituicoes',
  templateUrl: './instituicoes.component.html',
  styleUrls: ['./instituicoes.component.scss']
})
export class InstituicoesComponent implements OnInit {
  public messageError!: string
  public institutions!: Institutions
  constructor(private InstitutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.getAllInstitutions()
  }

  getAllInstitutions(): void {
    this.InstitutionsService.getAllInstitutions()
    .subscribe(
      res => { this.institutions = res },
      err => this.messageError = 'Ocorreu um erro interno'
    )
  }
}
