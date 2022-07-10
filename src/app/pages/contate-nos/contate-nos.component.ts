import { IServiceContactMethods, ISendMessageDTO } from './../../services/contact/contact.model';
import { ContactService } from './../../services/contact/contact.service';
import { Component, ViewChild } from '@angular/core';
import GlobalVars from 'src/app/global/global.model';
import { ToastrService } from 'ngx-toastr';

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
