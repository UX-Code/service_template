 
export interface PaisesDao { 
  getCountries(): Promise<any> 
  insertCountry(data): Promise<any>
}