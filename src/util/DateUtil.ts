import * as moment from 'moment-timezone';
import message from './MessageUtil'

export class DateUtil {
  public static obtenerFecha(date: Date): string {
    return moment(date).tz("America/Bogota").format("YYYY-MM-DD");
  }

  public static obtenerFechaHoy(): string {
    return moment().tz("America/Bogota").format("YYYY-MM-DD");
  }

  public static obtenerHora(date: Date): string {
    return moment(date).tz("America/Bogota").format("HH:mm:ss");
  }

  public static obtenerHoraHoy(): string {
    return moment().tz("America/Bogota").format("HH:mm:ss");
  }

  public static obtenerFechaYHora(date: Date): string {
    return moment(date).tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
  }

  public static obtenerFechaYHoraHoy(): string {
    return moment().tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
  }

  public static restarFechaPorDias(date: Date, diasARestar: number): string {
    return moment(date).subtract(diasARestar, 'days').format('YYYY-MM-DD');
  }

  public static validarFecha(date: string): boolean {
    return moment(date, "YYYY-MM-DD").isValid()
  }

  public static validarFechaIniFechaFin(date_start: string, date_end: string): boolean{

    const stack = {
      isError: true,
      typeError: 'error',
      httpCode: 400,
    }

    try {
      
      const fechaInicio = this.obtenerFecha(new Date(date_start));
      const fechaFinal  = this.obtenerFecha(new Date(date_end));

      if(!moment(fechaInicio).isValid()){
        stack["message"] = message.excepciones.fechaInvalida(date_start)
        throw new TypeError(JSON.stringify(stack));
      }

      if(!moment(fechaFinal).isValid()){
        stack["message"] = message.excepciones.fechaInvalida(date_end)
        throw new TypeError(JSON.stringify(stack));
      }
  
      if(fechaInicio > fechaFinal){
        stack["message"] = message.excepciones.FechaFinFechaInicial
        throw new TypeError(JSON.stringify(stack));
      }

      return true;

    } catch (error) {
      throw new TypeError(JSON.stringify(stack));
    }
    
  }  
  public static validarFechaFinalHoy(date_end: string): boolean{

    const stack = {
      isError: true,
      typeError: 'error',
      httpCode: 400,
    }

    try {
       
      const fechaFinal  = this.obtenerFecha(new Date(date_end));
 
      if(!moment(fechaFinal).isValid()){
        stack["message"] = message.excepciones.fechaInvalida(date_end)
        throw new TypeError(JSON.stringify(stack));
      }
  
      if(fechaFinal > this.obtenerFechaHoy()){
        stack["message"] = message.excepciones.fechaFinalHoy
        throw new TypeError(JSON.stringify(stack));
      }

      return true;

    } catch (error) {
      throw new TypeError(JSON.stringify(stack));
    }
    
  }  


}