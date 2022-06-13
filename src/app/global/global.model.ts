export default class GlobalVars {
  public static messageError: string
  public static messageSuccess: string
  public static baseURL: string = 'http://localhost:3333'

  public static verifyRequest(res: IRequest){
    console.log(res)
    if(!res.error) this.messageSuccess = res.message
    else this.messageError = res.error
  }
}

export interface IRequest{
  error: string
  message: string
}
