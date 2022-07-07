export default class GlobalVars {
  public static messageError: string
  public static messageSuccess: string
  /* public static baseURL: string = 'http://localhost:3333' */
  public static baseURL: string = 'https://api-doe-mais.herokuapp.com'

  public static verifyRequest(res: IRequest){
    if(!res.error) {
      this.messageSuccess = res.message
      this.messageError = ''

    }else {
      this.messageError = res.error
      this.messageSuccess = ''
    }
  }
}

export interface IRequest{
  error: string
  message: string
}
