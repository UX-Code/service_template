export class ErrorResponseBaseDto {
  private code: string; 
  private message: string;

  constructor(code: string, message: string) {
    this.code = code; 
    this.message = message;
  }

  get $code(): string {
    return this.code;
  }
 
  get $message(): string {
    return this.message;
  }
}