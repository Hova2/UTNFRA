import { Component, OnInit } from "@angular/core";
import { ActorI } from "src/app/interface/actor-i";
import { ActorService } from "src/app/service/actor.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PeliculaService } from "src/app/service/pelicula.service";

@Component({
  selector: "app-alta-pelicula",
  templateUrl: "./alta-pelicula.component.html",
  styleUrls: ["./alta-pelicula.component.css"]
})
export class AltaPeliculaComponent implements OnInit {
  listaActores: Array<ActorI>;
  public peliculaForm: FormGroup;

  constructor(public as: ActorService, public ps: PeliculaService) {
    this.peliculaForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      tPelicula: new FormControl("", Validators.required),
      fEstreno: new FormControl("", Validators.required),
      cantPublico: new FormControl("", [
        Validators.min(0),
        Validators.required
      ]),
      ePrincipal: new FormControl("", Validators.required)
    });
  }

  guardarForm() {
    if (!this.peliculaForm.invalid) {
      const peliculaTmp = {
        id: this.ps.traerUltimoId(),
        nombre: this.peliculaForm.value.nombre,
        tipo: this.peliculaForm.value.tPelicula,
        fechaEstreno: this.peliculaForm.value.fEstreno,
        cantPublico: this.peliculaForm.value.cantPublico,
        fotoPelicula:
          "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Film-icon.png",
        estrellaPrincipal: this.peliculaForm.value.ePrincipal
      };
      this.ps.persistirPelicula(peliculaTmp);
    }
    this.peliculaForm.reset();
  }

  cancelarForm() {
    this.peliculaForm.reset();
  }

  ngOnInit() {
    this.listaActores = this.as.traerActores();
  }
}
