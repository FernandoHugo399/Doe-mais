import { Injectable } from '@angular/core';
import { catchError, empty, Observable, tap } from 'rxjs';
import { ISendMessageDTO, IServiceContact } from './contact.model';
import GlobalVars, { IRequest } from 'src/app/global/global.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements IServiceContact {
  private baseURL = GlobalVars.baseURL
  constructor(private http: HttpClient) { }

  public sendMessage(message: ISendMessageDTO, inputSubmit: { nativeElement: HTMLInputElement }): Observable<IRequest> {
    inputSubmit.nativeElement.classList.add('input-disabled')
    inputSubmit.nativeElement.disabled = true

    return this.http.post<IRequest>(`${this.baseURL}/save-message`, {
      nome: message.nome,
      email: message.email,
      telefone: message.telefone,
      mensagem: message.mensagem
    })
    .pipe(tap(()=>{
      message.email = ''
      message.nome = ''
      message.telefone = ''
      message.mensagem = ''
    }))
    .pipe(tap((res)=>{
      GlobalVars.verifyRequest(res)
    }))
    .pipe(tap(()=>{
      inputSubmit.nativeElement.classList.remove('input-disabled')
      inputSubmit.nativeElement.disabled = false
    }))
    .pipe(catchError(()=>{
      GlobalVars.messageError = 'Ocorreu um erro inesperado'
      return empty()
    }))
  }

}
