export class ResponseBaseDto<T>{
  private isError: boolean;
  private typeResponse: string;
  private response: T;

  constructor(isError: boolean, typeResponse: string, response: T) {
    this.isError = isError;
    this.typeResponse = typeResponse;
    this.response = response;
  }

  get $isError(): boolean {
    return this.isError;
  }

  get $message(): string {
    return this.typeResponse;
  }

  get $response(): T {
    return this.response;
  }
}