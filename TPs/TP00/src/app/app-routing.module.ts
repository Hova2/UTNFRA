import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoDenegadoComponent } from './componentes/acceso-denegado/acceso-denegado.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaAdministradorComponent } from './componentes/pagina-administrador/pagina-administrador.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { Rol } from './enums/rol.enum';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'altausuario', component: AltaUsuarioComponent },
  {
    path: 'altaproducto',
    component: AltaProductoComponent,
    canActivate: [AuthGuard],
    data: { rol: Rol.Admin }
  },
  {
    path: 'usuario',
    component: PaginaUsuarioComponent,
    canActivate: [AuthGuard],
    data: { rol: [Rol.Admin, Rol.Usuario] }
  },
  {
    path: 'administrador',
    component: PaginaAdministradorComponent,
    canActivate: [AuthGuard],
    data: { rol: [Rol.Admin] }
  },
  { path: 'accesodenegado', component: AccesoDenegadoComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
