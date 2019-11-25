import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-tabla-listado-usuarios',
  templateUrl: './tabla-listado-usuarios.component.html',
  styleUrls: ['./tabla-listado-usuarios.component.scss']
})
export class TablaListadoUsuariosComponent implements OnInit {
  @Input() rol: string;

  lista$: Observable<any[]>;
  columnasTabla: string[];
  datosTabla: MatTableDataSource<any>;

  constructor(private as: AuthService, private us: UsuarioService) {}

  ngOnInit() {
    this.lista$ = this.us.traerUsuarios();
    if (this.rol === 'Administrador') {
      this.columnasTabla = [
        'nombre',
        'apellido',
        'email',
        'activo',
        'rol',
        'id'
      ];
    } else {
      this.columnasTabla = ['nombre', 'apellido', 'email', 'activo', 'rol'];
    }

    this.lista$.subscribe(datos => {
      this.datosTabla = new MatTableDataSource(datos);
    });
  }

  deshabilitarUsuario(id: string) {
    this.us.deshabilitarUsuario(id);
  }
}
