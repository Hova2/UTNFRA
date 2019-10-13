import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private controladorAlerta: AlertController;
  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
    this.controladorAlerta = new AlertController();
  }

  ngOnInit() {}

  aceptarCredenciales() {
    if (this.usuario.nombre.trim() === '' || this.usuario.password.trim() === '') {
      this.controladorAlerta.create({
        header: 'Ingrese datos',
        message: 'Los datos de usuario y password son obligatorios',
        buttons: [{
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            this.cancelarCredenciales();
          }
        }]
      }).then(alerta => {
        alerta.present();
      });
   } else {
    if (this.usuario.nombre.trim() !== 'Prueba' || this.usuario.password.trim() !== 'Prueba') {
        this.controladorAlerta.create({
          header: 'Error en el logueo',
          message: 'Usuario o password incorrecto',
          buttons: [{
            text: 'Cerrar',
            role: 'cancel',
            handler: () => {
              this.cancelarCredenciales();
            }
          }]
        }).then(alerta => {
          alerta.present();
        });
    } else {
      this.controladorAlerta.create({
        header: 'Se a logueado correctamente',
        message: 'Bienvenido ' + this.usuario.nombre,
        buttons: [{
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            this.cancelarCredenciales();
          }
        }]
      }).then(alerta => {
        alerta.present();
      });
    }
   }

  }

  cancelarCredenciales() {
    this.usuario.nombre = '';
    this.usuario.password = '';
  }
}
