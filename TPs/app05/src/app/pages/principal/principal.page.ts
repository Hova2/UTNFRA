import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MensajeI } from 'src/app/interfaces/mensaje-i';
import { IonToolbar, IonItem, IonContent, IonInput } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensaje.service';
import { CargandoService } from 'src/app/services/cargando.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('items')
  items: IonItem;
  @ViewChild('barra')
  barra: IonToolbar;
  @ViewChild('contenido')
  contenido: IonContent;
  @ViewChild('mensaje')
  mensaje: IonInput;

  public listaMensaje: MensajeI[];
  public nombreSala: string;
  public claseCabezera: string;
  public clasePie: string;
  public claseBoton: string;
  public claseAppSala: string;

  constructor(
    private as: AuthService,
    private ms: MensajeService,
    private cs: CargandoService
  ) {
    this.claseCabezera = 'ion-hide';
    this.clasePie = 'ion-hide';
    this.claseAppSala = 'ion-hide';
    this.claseBoton = 'altura-50 ion-no-margin';
  }

  ngOnInit() {}

  public seleccionarSala(nombre: string) {
    this.nombreSala = nombre;
    this.claseCabezera = '';
    this.clasePie = '';
    this.claseAppSala = '';
    this.claseBoton = 'ion-hide';
    switch (nombre) {
      case 'PPS-4A':
        this.items.color = 'secondary';
        this.barra.color = 'secondary';
        this.contenido.color = 'secondary';
        break;
      case 'PPS-4B':
        this.items.color = 'tertiary';
        this.barra.color = 'tertiary';
        this.contenido.color = 'tertiary';
        break;
    }
    this.ms.listarMensajes(nombre, 10).subscribe((mensajes) => {
      this.listaMensaje = mensajes.reverse();
    });
  }

  public enviar(texto: string) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      const msjTmp: MensajeI = {
        sala: this.nombreSala,
        usuario: usuario.email,
        fechaHora: new Date(),
        texto: texto,
      };
      this.ms.agregarMensaje(msjTmp).finally(() => {
        this.mensaje.value = '';
        this.ms.listarMensajes(this.nombreSala, 10).subscribe((mensajes) => {
          this.listaMensaje = mensajes.reverse();
        });
        this.contenido.scrollToBottom();
      });
    });
  }
}
