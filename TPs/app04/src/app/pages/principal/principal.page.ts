import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SaldoService } from 'src/app/services/saldo.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'firebase';
import { SaldoI } from 'src/app/interfaces/saldo-i';
import { ToastService } from 'src/app/services/toast.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public saldo: number;
  public usuario: string;
  private usuarioActual: Observable<User>;
  private elemento: any;
  public elementoActivo: boolean;

  constructor(
    private bs: BarcodeScanner,
    private ss: SaldoService,
    private as: AuthService,
    private ts: ToastService
  ) {
    this.saldo = 0;
    this.usuarioActual = this.as.traerUsuarioActual();
    this.elemento = null;
    this.elementoActivo = true;
  }

  ngOnInit() {
    this.usuarioActual.subscribe((usuario) => {
      this.usuario = usuario.email;
      this.ss.traerSaldoUsuario(usuario.email).subscribe((elemento) => {
        if (elemento !== null) {
          this.saldo = elemento.saldo.saldo;
          this.elemento = elemento;
          this.elementoActivo = false;
        }
      });
    });
  }

  escanearCodigo() {
    this.bs.scan().then((qr) => {
      switch (qr.text.trim()) {
        case '8c95def646b6127282ed50454b73240300dccabc':
          this.usuarioActual.subscribe((usuario) => {
            this.ss
              .traerSaldoUsuario(usuario.email)
              .pipe(take(1))
              .subscribe((elemento) => {
                if (elemento === null) {
                  const codsQr: Array<string> = new Array<string>();
                  codsQr.push('8c95def646b6127282ed50454b73240300dccabc');
                  const saldo: SaldoI = {
                    usuario: usuario.email,
                    codigosQr: codsQr,
                    saldo: 10,
                  };
                  this.ss.cargarSaldoUsuario(saldo);
                } else {
                  if (
                    elemento.saldo.codigosQr.includes(
                      '8c95def646b6127282ed50454b73240300dccabc'
                    )
                  ) {
                    if (usuario.email === 'admin@admin.com') {
                      let cont = 0;
                      elemento.saldo.codigosQr.forEach((codigo) => {
                        if (
                          codigo === '8c95def646b6127282ed50454b73240300dccabc'
                        ) {
                          cont = cont + 1;
                        }
                      });
                      if (cont === 2) {
                        this.ts.errorDeCargaAdmin();
                      } else {
                        elemento.saldo.codigosQr.push(
                          '8c95def646b6127282ed50454b73240300dccabc'
                        );
                        elemento.saldo.saldo = elemento.saldo.saldo + 10;
                        this.ss.actualizarSaldoUsuario(
                          elemento.id,
                          elemento.saldo
                        );
                      }
                    } else {
                      this.ts.errorDeCarga();
                    }
                  } else {
                    elemento.saldo.codigosQr.push(
                      '8c95def646b6127282ed50454b73240300dccabc'
                    );
                    elemento.saldo.saldo = elemento.saldo.saldo + 10;
                    this.ss.actualizarSaldoUsuario(elemento.id, elemento.saldo);
                  }
                }
              });
          });
          break;
        case 'ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172':
          this.usuarioActual.subscribe((usuario) => {
            this.ss
              .traerSaldoUsuario(usuario.email)
              .pipe(take(1))
              .subscribe((elemento) => {
                if (elemento === null) {
                  const codsQr: Array<string> = new Array<string>();
                  codsQr.push('ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172');
                  const saldo: SaldoI = {
                    usuario: usuario.email,
                    codigosQr: codsQr,
                    saldo: 50,
                  };
                  this.ss.cargarSaldoUsuario(saldo);
                } else if (
                  elemento.saldo.codigosQr.includes(
                    'ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172'
                  )
                ) {
                  if (usuario.email === 'admin@admin.com') {
                    let cont = 0;
                    elemento.saldo.codigosQr.forEach((codigo) => {
                      if (
                        codigo === 'ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172'
                      ) {
                        cont = cont + 1;
                      }
                    });
                    if (cont === 2) {
                      this.ts.errorDeCargaAdmin();
                    } else {
                      elemento.saldo.codigosQr.push(
                        'ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172'
                      );
                      elemento.saldo.saldo = elemento.saldo.saldo + 50;
                      this.ss.actualizarSaldoUsuario(
                        elemento.id,
                        elemento.saldo
                      );
                    }
                  } else {
                    this.ts.errorDeCarga();
                  }
                } else {
                  elemento.saldo.codigosQr.push(
                    'ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172'
                  );
                  elemento.saldo.saldo = elemento.saldo.saldo + 50;
                  this.ss.actualizarSaldoUsuario(elemento.id, elemento.saldo);
                }
              });
          });
          break;
        case '2786f4877b9091dcad7f35751bfcf5d5ea712b2f':
          this.usuarioActual.subscribe((usuario) => {
            this.ss
              .traerSaldoUsuario(usuario.email)
              .pipe(take(1))
              .subscribe((elemento) => {
                if (elemento === null) {
                  const codsQr: Array<string> = new Array<string>();
                  codsQr.push('2786f4877b9091dcad7f35751bfcf5d5ea712b2f');
                  const saldo: SaldoI = {
                    usuario: usuario.email,
                    codigosQr: codsQr,
                    saldo: 100,
                  };
                  this.ss.cargarSaldoUsuario(saldo);
                } else if (
                  elemento.saldo.codigosQr.includes(
                    '2786f4877b9091dcad7f35751bfcf5d5ea712b2f'
                  )
                ) {
                  if (usuario.email === 'admin@admin.com') {
                    let cont = 0;
                    elemento.saldo.codigosQr.forEach((codigo) => {
                      if (
                        codigo === '2786f4877b9091dcad7f35751bfcf5d5ea712b2f'
                      ) {
                        cont = cont + 1;
                      }
                    });
                    if (cont === 2) {
                      this.ts.errorDeCargaAdmin();
                    } else {
                      elemento.saldo.codigosQr.push(
                        '2786f4877b9091dcad7f35751bfcf5d5ea712b2f'
                      );
                      elemento.saldo.saldo = elemento.saldo.saldo + 100;
                      this.ss.actualizarSaldoUsuario(
                        elemento.id,
                        elemento.saldo
                      );
                    }
                  } else {
                    this.ts.errorDeCarga();
                  }
                } else {
                  elemento.saldo.codigosQr.push(
                    '2786f4877b9091dcad7f35751bfcf5d5ea712b2f'
                  );
                  elemento.saldo.saldo = elemento.saldo.saldo + 100;
                  this.ss.actualizarSaldoUsuario(elemento.id, elemento.saldo);
                }
              });
          });
          break;
      }
    });
  }

  public borrarCargas() {
    this.elementoActivo = true;
    this.ss.borrarSaldoUsuario(this.elemento.id);
    this.saldo = 0;
  }
}
