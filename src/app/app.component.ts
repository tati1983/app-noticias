import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-noticias';
  listadoDeNoticias: any[] = [];
  loading = false;

  constructor(private _api: NoticiasService){};

  buscarNoticias(parametro: any) {
    this.loading = true;
    this.listadoDeNoticias = [];


    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(resultado => {
        this.loading = false;
        this.listadoDeNoticias = resultado.articles;
      });
    }, 2000);
  }
}
