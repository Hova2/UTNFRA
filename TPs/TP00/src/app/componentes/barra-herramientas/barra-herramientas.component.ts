import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/servicios/auth.service';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/interfaces/usuario-i';

@Component({
  selector: "app-barra-herramientas",
  templateUrl: "./barra-herramientas.component.html",
  styleUrls: ["./barra-herramientas.component.scss"]
})
export class BarraHerramientasComponent implements OnInit {
  foto: string;
  usuario: Observable<UsuarioI>;

  constructor(private as: AuthService) {
    this.usuario = as.traerUsuarioActivo();
    this.usuario.subscribe(usuario => {
      this.foto = usuario.foto;
    })
  }

  ngOnInit() {}
}
