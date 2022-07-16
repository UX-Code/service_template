import { injectable } from 'inversify';
import "reflect-metadata";

import { DBAdapterMysql } from "./DBAdapterMysql";

@injectable()
export class DBAdapterMysqlImpl implements DBAdapterMysql{
  private instance: any; 
  private connection: any;
  
  constructor(){
    this.instance = require('mysql');
    this.connection = this.instance.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Guille0502',
      database: 'geo'
    });
  }

  public getDB() {
    return this.connection;
  }

}