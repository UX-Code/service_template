export class EntityCountry{
  private sortname: string;
  private name: string;
  private phonecode: number;

  constructor(sortname: string, name: string, phonecode: number){
    this.sortname = sortname;
    this.name = name;
    this.phonecode = phonecode;
  }

  public get $sortname(): string{
    return this.sortname;
  }
  public get $name(): string{
    return this.name;
  }
  public get $phonecode(): number{
    return this.phonecode;
  }

}