import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ProductoService } from 'src/app/servicios/producto.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-tabla-listado-productos',
  templateUrl: './tabla-listado-productos.component.html',
  styleUrls: ['./tabla-listado-productos.component.scss'],
  animations: [
    trigger('expandirDetalle', [
      state('colapsar', style({ height: '0px', minHeight: '0' })),
      state('expandir', style({ height: '*' })),
      transition(
        'expandir <=> colapsar',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TablaListadoProductosComponent implements OnInit {
  @Input() rol: string;

  lista$: Observable<any[]>;
  columnasTabla: string[];
  datosTabla: MatTableDataSource<any>;
  productoExpandido: ['descripcion', 'observaciones'] | null;

  constructor(private ps: ProductoService) {}

  ngOnInit() {
    this.lista$ = this.ps.traerProductos();
    if (this.rol === 'Administrador') {
      this.columnasTabla = [
        'nombre',
        'costo',
        'cantidad',
        'fechaCreacion',
        'activo',
        'id'
      ];
    } else {
      this.columnasTabla = [
        'nombre',
        'costo',
        'cantidad',
        'fechaCreacion',
        'activo'
      ];
    }

    this.lista$.subscribe(datos => {
      this.datosTabla = new MatTableDataSource(datos);
    });
  }

  deshabilitarProducto(id: string) {
    this.ps.deshabilitarProducto(id);
  }
}
