export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Invalidi param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
