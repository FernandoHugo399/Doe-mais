import { IServiceContactMethods, ISendMessageDTO } from './../../services/contact/contact.model';
import { ContactService } from './../../services/contact/contact.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contate-nos',
  templateUrl: './contate-nos.component.html',
  styleUrls: ['./contate-nos.component.scss', './contate-nosMD.component.scss']
})
export class ContateNosComponent implements IServiceContactMethods{
  @ViewChild('inputSubmit') inputSubmit!: { nativeElement: HTMLInputElement; };

  public Message: ISendMessageDTO = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  constructor(private contactService: ContactService){ }
  public sendMessage(): void {
    this.contactService.sendMessage(this.Message, this.inputSubmit).subscribe()
  }

}
