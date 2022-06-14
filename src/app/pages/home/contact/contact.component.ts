import { ISendMessageDTO, IServiceContactMethods } from './../../../services/contact/contact.model';
import { Component, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contactMD.component.scss']
})
export class ContactComponent implements IServiceContactMethods {
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
