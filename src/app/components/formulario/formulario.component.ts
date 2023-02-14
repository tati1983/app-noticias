import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter <any>();

  categoriaSeleccionada = 'general';

  paisSeleccionado = 'ar';

  categorias: any[] = [
    {value: 'general', name: 'General'},
    {value: 'business', name: 'Negocios'},
    {value: 'entertainment', name: 'Espectáculos'},
    {value: 'health', name: 'Salud'},
    {value: 'science', name: 'Ciencia'},
    {value: 'sports', name: 'Deportes'},
    {value: 'technology', name: 'Tecnología'}
  ]

  paises: any[] = [
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brasil'},
    {value: 'ch', name: 'Chile'},
    {value: 'mx', name: 'Mexico'},
    {value: 've', name: 'Venezuela'},
    {value: 'es', name: 'España'}
  ]

  constructor() { }

  ngOnInit(): void { }

  buscarNoticias(){
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
function output() {
  throw new Error('Function not implemented.');
}

