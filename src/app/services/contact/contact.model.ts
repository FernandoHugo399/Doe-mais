import { IRequest } from './../../global/global.model';
import { Observable } from "rxjs";

export interface IServiceContact {
  sendMessage(message: ISendMessageDTO): Observable<IRequest>
}

export interface ISendMessageDTO{
  nome: string
  email: string
  telefone: number
  mensagem: string
}
