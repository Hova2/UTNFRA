import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActorI } from 'src/app/interface/actor-i';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-foto',
  templateUrl: './modificar-foto.component.html',
  styleUrls: ['./modificar-foto.component.css']
})
export class ModificarFotoComponent implements OnInit {

  @Input() actor: ActorI;
  @Output() actorModificado = new EventEmitter<ActorI>();
  public fotoForm: FormGroup;

  constructor() {
    this.fotoForm = new FormGroup({
      foto: new FormControl("", Validators.required),
    });
  }

  guardarForm() {
    if (!this.fotoForm.invalid) {
      this.actor.foto = this.fotoForm.value.foto;
    }
    this.fotoForm.reset();
    this.actorModificado.emit(this.actor);
  }

  cancelarForm() {
    this.fotoForm.reset();
  }

  ngOnInit() {
  }

}
