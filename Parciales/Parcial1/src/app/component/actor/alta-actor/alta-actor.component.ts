import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public actorForm: FormGroup;

  constructor(private as: ActorService) {
    this.actorForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      nacionalidad: new FormControl('', Validators.required),
      fNacimiento: new FormControl('', Validators.required)
    });
  }

  guardarForm() {

    if(!this.actorForm.invalid){
      const actorTmp = {
        id: this.as.traerUltimoId(),
        nombre: this.actorForm.value.nombre,
        apellido: this.actorForm.value.apellido,
        nacionalidad: this.actorForm.value.nacionalidad,
        fNacimiento: this.actorForm.value.fNacimiento
      };
      this.as.persistirActor(actorTmp);
    }
    this.actorForm.reset();
  }

  cancelarForm() {
    this.actorForm.reset();
  }

  ngOnInit() {
  }

}
