import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';

const routes: Routes = [
  { path: '', component: AltaUsuarioComponent },
  { path: 'altausuario', component: AltaUsuarioComponent },
  { path: 'altaproducto', component: AltaProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
