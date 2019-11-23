import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/interfaces/usuario-i';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-barra-herramientas',
  templateUrl: './barra-herramientas.component.html',
  styleUrls: ['./barra-herramientas.component.scss']
})
export class BarraHerramientasComponent implements OnInit {
  foto: string;
  rol: string;
  nomApe: string;
  usuario$: Observable<UsuarioI>;
  listaUsuarios$: Observable<any[]>;

  constructor(private as: AuthService, private us: UsuarioService) {
    this.usuario$ = as.traerUsuarioActivo();
    this.listaUsuarios$ = this.us.traerUsuarios();

    this.usuario$.subscribe(usuario => {
      this.foto = usuario.foto;
      this.rol = usuario.rol;
      this.nomApe = usuario.nombre + ' ' + usuario.apellido;
    });
  }

  ngOnInit() {}

  cerrarSesion() {
    this.as.salir();
  }
}
