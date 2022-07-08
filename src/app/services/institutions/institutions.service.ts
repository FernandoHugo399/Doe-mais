import { Router } from '@angular/router';
import { Institution, InstitutionBankInformation, Institutions, IServiceInstitutions } from './institutions.model';
import { Injectable } from '@angular/core';
import { catchError, empty, Observable, tap } from 'rxjs';
import GlobalVars from 'src/app/global/global.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService implements IServiceInstitutions {
  private baseURL = GlobalVars.baseURL
  constructor(private http: HttpClient, private router: Router) { }

  getAllInstitutions(): Observable<Institutions> {
    return this.http.get<Institutions>(this.baseURL + '/institutionss')
    .pipe(tap((res)=>{

      GlobalVars.verifyRequest(res)
      if(GlobalVars.messageError)
        this.router.navigate([''])

    })).pipe(catchError(()=>{
      GlobalVars.messageError = 'Ocorreu um erro inesperado'
      return empty()
    }))
  }

  getInstitutionById(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.baseURL + '/institution/' + id)
    .pipe(tap((res)=>{

      GlobalVars.verifyRequest(res)
      if(GlobalVars.messageError)
        this.router.navigate(['instituicoes'])

    })).pipe(catchError(()=>{
      GlobalVars.messageError = 'Ocorreu um erro inesperado'
      return empty()
    }))
  }

  GetBankInformationsByIdOffInstitution(id: number): Observable<InstitutionBankInformation> {
    return this.http.get<InstitutionBankInformation>(this.baseURL + '/institution-information/' + id)
    .pipe(tap((res)=>{

      GlobalVars.verifyRequest(res)
      if(GlobalVars.messageError)
        this.router.navigate(['instituicoes'])

    })).pipe(catchError(()=>{
      GlobalVars.messageError = 'Ocorreu um erro inesperado'
      return empty()
    }))
  }

}
