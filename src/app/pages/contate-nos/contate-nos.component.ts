import { IServiceContactMethods, ISendMessageDTO } from './../../services/contact/contact.model';
import { ContactService } from './../../services/contact/contact.service';
import { Component, ViewChild } from '@angular/core';
import GlobalVars from 'src/app/global/global.model';

@Component({
  selector: 'app-contate-nos',
  templateUrl: './contate-nos.component.html',
  styleUrls: ['./contate-nos.component.scss', './contate-nosMD.component.scss']
})
export class ContateNosComponent implements IServiceContactMethods{
  @ViewChild('inputSubmit') inputSubmit!: { nativeElement: HTMLInputElement; };
  public messageError!: string
  public messageSuccess!: string

  public Message: ISendMessageDTO = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  constructor(private contactService: ContactService){ }
  public sendMessage(): void {
    this.contactService.sendMessage(this.Message, this.inputSubmit).subscribe(
      ()=>{
        this.messageSuccess = GlobalVars.messageSuccess
        this.messageError = GlobalVars.messageError
        GlobalVars.cleanVars()
      },
      (err)=> this.messageError = 'Ocorreu um erro interno'
    )
  }

}
