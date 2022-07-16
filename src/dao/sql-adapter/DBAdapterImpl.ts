import { injectable } from "inversify";
import "reflect-metadata";
import { DBAdapter } from "./DBAdapter";
import * as sql from 'mssql';

@injectable()
export class DBAdapterImpl implements DBAdapter {
  private pools = {};

  public async getPool(name, config){
    if (!Object.prototype.hasOwnProperty.call(this.pools, name)) {
      const pool = new sql.ConnectionPool(config)
      const close = pool.close.bind(pool)
      pool.close = (...args) => {
        delete this.pools[name]
        return close(...args)
      }
      await pool.connect() 
      this.pools[name] = pool
    }
    return this.pools[name]
  }

  public getClose(pool){ 
      return pool.close();
  }
}