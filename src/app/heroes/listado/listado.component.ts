import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'hulk', 'thor'];
  heroeBorrado: string = '';

  borrarHeroe() {

    const heroBorrado = this.heroes.shift() || '';
    console.log(heroBorrado);
    this.heroeBorrado = heroBorrado;

  }

}
