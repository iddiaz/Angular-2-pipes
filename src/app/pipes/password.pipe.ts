import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(valor: any, activar: boolean = true ): string {
    // if( activar ) {
    //   let salida: string = '';
    //   for( let i=0; i < valor.length; i++){
    //     salida += '*';
    //   }
    //   return salida;
    // } else {
    //   return valor;
    // }
    
    //mas sencillo
    return activar ? valor.replace(/./g, () => '*') : valor;

    //más sencillo aun
    // return activar ? '*'.repeat(valor.length) : valor;

    
  }

}
