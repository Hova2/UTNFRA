import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/services/rutas.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public usuarioActual: string;

  constructor(private rs: RutasService, private as: AuthService) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      this.usuarioActual = usuario.email;
    });
  }

  ngOnInit() {}

  public redirector(pagina: string) {
    this.rs.principalRutas(pagina);
  }
}
