import { Router } from '@angular/router';
import { Institution, InstitutionBankInformation, IServiceInstitutions } from './institutions.model';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import GlobalVars from 'src/app/global/global.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService implements IServiceInstitutions {
  private baseURL = GlobalVars.baseURL
  constructor(private http: HttpClient, private router: Router) { }

  getAllInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.baseURL + '/institutions')
    .pipe(tap((res)=>{
      GlobalVars.verifyRequest(res)
    }))
  }

  getInstitutionById(id: string): Observable<Institution> {
    return this.http.get<Institution>(this.baseURL + '/institution/' + id)
    .pipe(tap((res)=>{
      GlobalVars.verifyRequest(res)
      if(GlobalVars.messageError)
        this.router.navigate(['instituicoes'])
    }))
  }

  GetBankInformationsByIdOffInstitution(id: string): Observable<InstitutionBankInformation> {
    return this.http.get<InstitutionBankInformation>(this.baseURL + '/institution-information/' + id)
    .pipe(tap((res)=>{
      GlobalVars.verifyRequest(res)
      if(GlobalVars.messageError)
        this.router.navigate(['instituicoes'])
    }))
  }

}
