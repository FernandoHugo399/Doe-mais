import { IServiceContactMethods, ISendMessageDTO } from './../../services/contact/contact.model';
import { ContactService } from './../../services/contact/contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contate-nos',
  templateUrl: './contate-nos.component.html',
  styleUrls: ['./contate-nos.component.scss', './contate-nosMD.component.scss']
})
export class ContateNosComponent implements IServiceContactMethods{
  private message: ISendMessageDTO = {
    nome: 'teste',
    email: 'testjest@email.com',
    telefone: '55 81 90000-0000',
    mensagem: 'Fazendo teste com jest'
  }
  constructor(private contactService: ContactService){ }

  public sendMessage(): void {
      this.contactService.sendMessage(this.message).subscribe()
  }

}
