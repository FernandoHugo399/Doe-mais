import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import GlobalVars from 'src/app/global/global.model';
import { InstitutionBankInformation } from 'src/app/services/institutions/institutions.model';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';

@Component({
  selector: 'app-doar-agora-individual',
  templateUrl: './doar-agora-individual.component.html',
  styleUrls: ['./doar-agora-individual.component.scss']
})
export class DoarAgoraIndividualComponent implements OnInit {
  public institutionBankInformation!: InstitutionBankInformation
  public messageError!: string
  public id!: string;
  constructor(private activatedRoute: ActivatedRoute, private route: Router, private institutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string
    this.request(this.id)
  }

  public request(id: string): void {
    this.institutionsService.GetBankInformationsByIdOffInstitution(id)
    .subscribe(
      res => this.institutionBankInformation = res,
      err => {
        GlobalVars.messageError = 'Ocorreu um erro ao carregar as informações'
        this.route.navigate(['instituicoes'])
      }
    )
  }

}
