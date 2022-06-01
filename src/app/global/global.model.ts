export default class GlobalVars {
  public static messageError: string
  public static messageSuccess: string
  public static baseURL: string = 'http://localhost:3333'

  public static verifyRequest(res: IRequest){
    if(!res.error) GlobalVars.messageSuccess = res.message
    else GlobalVars.messageError = res.error
  }
}

export interface IRequest{
  error: string
  message: string
}
