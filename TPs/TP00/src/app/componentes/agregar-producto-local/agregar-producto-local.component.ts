import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { LocalService } from 'src/app/servicios/local.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto-local',
  templateUrl: './agregar-producto-local.component.html',
  styleUrls: ['./agregar-producto-local.component.scss']
})
export class AgregarProductoLocalComponent implements OnInit {
  locales$: Observable<any>;
  productos$: Observable<any>;
  productoLocalForm: FormGroup;

  constructor(private ls: LocalService, private ps: ProductoService) {
    this.locales$ = this.ls.traerLocales();
    this.productos$ = this.ps.traerProductos();
    this.productoLocalForm = new FormGroup({
      localId: new FormControl(''),
      productoId: new FormControl('')
    });
  }
  ngOnInit() {}

  guardarForm() {
    const producto = this.ps.traerProducto(
      this.productoLocalForm.value.productoId
    );
    this.ls.agregarProductoLocal(
      producto,
      this.productoLocalForm.value.localId,
      this.productoLocalForm.value.productoId
    );
    this.productoLocalForm.reset();
  }

  cancelarForm() {
    this.productoLocalForm.reset();
  }
}
