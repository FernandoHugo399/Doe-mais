import { InstitutionsService } from './../../services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institution } from 'src/app/services/institutions/institutions.model';
@Component({
  selector: 'app-saiba-mais-individual',
  templateUrl: './saiba-mais-individual.component.html',
  styleUrls: ['./saiba-mais-individual.component.scss']
})
export class SaibaMaisIndividualComponent implements OnInit {
  public institution!: Institution
  public messageError!: string
  public id!: string;
  constructor(private activatedRoute: ActivatedRoute, private institutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string

    this.institutionsService.getInstitutionById(this.id)
    .subscribe(
      res => this.institution = res
    )
  }

}
