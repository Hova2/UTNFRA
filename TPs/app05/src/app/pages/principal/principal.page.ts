import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MensajeI } from 'src/app/interfaces/mensaje-i';
import { IonToolbar, IonItem, IonContent, IonInput } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensaje.service';
import { CargandoService } from 'src/app/services/cargando.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild('items') items: IonItem;
  @ViewChild('barra') barra: IonToolbar;
  @ViewChild('contenido') contenido: IonContent;
  @ViewChild('mensaje') mensaje: IonInput;

  public listaMensaje: MensajeI[];
  public nombreSala: string;
  public claseOculto: string;
  public claseInfscr: string;
  public claseBoton: string;
  public claseHeader: string;
  public cantMensajes: number;

  constructor(
    private as: AuthService,
    private ms: MensajeService,
    private cs: CargandoService,
    private ts: ToastService
  ) {
    this.claseHeader = 'ion-hide';
    this.claseOculto = 'ion-hide';
    this.claseBoton = 'altura-50 ion-no-margin';
    this.cantMensajes = 10;
  }

  ngOnInit() {}

  public seleccionarSala(nombre: string) {
    this.nombreSala = nombre;
    this.claseOculto = '';
    this.claseHeader = 'ion-text-center';
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
    const spinner = this.cs.devolverSpinner();
    spinner.then((elemento) => {
      elemento.present();
    });
    const subs = this.ms
      .listarMensajes(nombre, this.cantMensajes)
      .subscribe((mensajes) => {
        this.listaMensaje = mensajes.reverse();
      });
    setTimeout(() => {
      spinner.then((elemento) => {
        elemento.dismiss();
      });
      this.contenido.scrollToBottom();
    }, 2000);
  }

  public enviar(texto: string) {
    this.as.traerUsuarioActual().subscribe((usuario) => {
      const msjTmp: MensajeI = {
        sala: this.nombreSala,
        usuario: usuario.email,
        fechaHora: new Date(),
        texto: texto,
      };
      const subs = this.ms.agregarMensaje(msjTmp).finally(() => {
        this.mensaje.value = '';
        const subs = this.ms
          .listarMensajes(this.nombreSala, this.cantMensajes)
          .subscribe((mensajes) => {
            this.listaMensaje = mensajes.reverse();
          });

        setTimeout(() => {
          subs.unsubscribe();
          this.contenido.scrollToBottom();
        }, 2000);
      });
    });
  }

  public cambiarCantMensajes(cant: number) {
    if (cant >= 10) {
      this.cantMensajes = parseInt(cant.toString());
      const spinner = this.cs.devolverSpinner();
      spinner.then((elemento) => {
        elemento.present();
      });
      const subs = this.ms
        .listarMensajes(this.nombreSala, this.cantMensajes)
        .subscribe((mensajes) => {
          this.listaMensaje = mensajes.reverse();
        });
      setTimeout(() => {
        spinner.then((elemento) => {
          elemento.dismiss();
        });
        subs.unsubscribe();
      }, 2000);
    } else {
      this.ts.mensajeGenerico('Minimo 10 mensajes');
    }
  }
}
