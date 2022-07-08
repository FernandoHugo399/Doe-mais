import { Observable } from 'rxjs';

export interface Institution{
  id_instituicao: number
  nome: string
  logo: string
  email: string
  localizacao: string
  telefone_1: string
  telefone_2?: string
  cpf_responsavel: string
  cnpj: string
  website: string
  sobre: string
  sobre_curto: string
}

export interface InstitutionBankInformation{
  id_dados: number
  banco_pix_1: string
  pix_1: string
  qr_code_pix_1: string
  banco_pix_2: string
  pix_2: string
  qr_code_pix_2: string
  banco_1: string
  agencia_banco_1: string
  conta_banco_1: string
  banco_2: string
  agencia_banco_2: string
  conta_banco_2: string
  id_instituicao: number
}


export interface IServiceInstitutions {
  getAllInstitutions(): Observable<Institution[]>
  getInstitutionById(id: number): Observable<Institution>
  GetBankInformationsByIdOffInstitution(id: number): Observable<InstitutionBankInformation>
}
