import { ToastrService } from 'ngx-toastr';
import { ISendMessageDTO, IServiceContactMethods } from './../../../services/contact/contact.model';
import { Component, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import GlobalVars from 'src/app/global/global.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contactMD.component.scss']
})
export class ContactComponent implements IServiceContactMethods {
  @ViewChild('inputSubmit') inputSubmit!: { nativeElement: HTMLInputElement; };
  public messageError!: string
  public messageSuccess!: string

  public Message: ISendMessageDTO = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  constructor(private contactService: ContactService, private toastr: ToastrService){ }

  public sendMessage(): void {
    this.contactService.sendMessage(this.Message, this.inputSubmit)
    .subscribe(
      ()=>{
        if(!GlobalVars.messageSuccess) this.errorToastr(GlobalVars.messageError)
        else this.successToastr()
        GlobalVars.cleanVars()
      },
      (err)=> this.errorToastr('Ocorreu um erro interno')
    )
  }

  public errorToastr(message: string): void{
    this.toastr.error(message, 'Erro')
  }

  public successToastr(): void{
    this.toastr.success('Mensagem enviada com sucesso')
  }
}
