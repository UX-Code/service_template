export interface DBAdapter{
    getPool(name, config):any;
    getClose(pool):any;
}