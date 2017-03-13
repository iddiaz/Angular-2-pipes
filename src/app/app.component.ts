import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Iván';
  nombre2 = 'iVAn diAz dIAz';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9];
  PI: number = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  valorDePromesa = new Promise ( (resolve, reject) => {
    setTimeout( () => resolve ('Llegaron los resultados'), 3500);
  });

  fecha = new Date ();

  // video: string = 'https://www.youtube-nocookie.com/embed/m_J9OViGkB8?controls=0';
  video = 'm_J9OViGkB8?controls=0';
}
