export class DataResponseBaseDto<T>{ 
  private message: string;
  private data: T;

  constructor(message: string, data: T) { 
    this.message = message;
    this.data = data;
  }

  get $message(): string {
    return this.message;
  }

  get $data(): T {
    return this.data;
  }
}