import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MensajeI } from 'src/app/interfaces/mensaje-i';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss'],
})
export class SalaComponent implements OnInit {
  @Input() listaMensaje: Array<MensajeI>;

  public usuarioLogueado: string;

  constructor(private as: AuthService) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      this.usuarioLogueado = usuario.email;
    });
  }

  ngOnInit() {}
}
