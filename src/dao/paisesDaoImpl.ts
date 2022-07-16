import { injectable } from 'inversify';
import { DEPENDENCYCONTAINER } from '../config/inversify/inversify.config';
import { DBAdapterMysql } from './mysql-adapter/DBAdapterMysql';
import { TYPESDAO } from '../config/inversify/types/TypesDao'; 
import { PaisesDao } from './interfaces'; 

import "reflect-metadata"; 
import { EntityCountry } from '../models/entities/entityCountry';

@injectable()
export class PaisesDaoImpl implements PaisesDao {
  private dbMysql = DEPENDENCYCONTAINER.get<DBAdapterMysql>(TYPESDAO.dbMysql);
  
  public async getCountries(): Promise<any> {
    try {
      const query = 'SELECT * FROM countries';
      return await this.execute_query(query, []);
    } catch (e) {
      throw new TypeError(e.message)
    }
  }

  public async insertCountry(data): Promise<any> {
    try {
      const query = 'INSERT INTO countries (sortname, name, phonecode) VALUES (?,?,?)';
       return await this.execute_query(query, [data.sortname, data.name, data.phonecode]);
    } catch (e) {
      throw new TypeError(e.message)
    }
  }
  
  public async execute_query(query, fields:any[]){
    try {
      return new Promise((resolve, rejects)=>{
        this.dbMysql.getDB().query({
          sql: query,
          timeout: 40000,
        }, fields, function(error, results){
          if(error) rejects(new Error(error));
          resolve(results);
        })
      })
    } catch (e) {
      throw new Error(e)
    }
  }

}
