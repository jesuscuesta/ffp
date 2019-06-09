import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../../model/personajes';

@Component({
  selector: 'fight-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  @Input() personaje: Personajes;
  @Output() ataque = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public atacar() {
    console.log('atacando');
    this.ataque.emit(this.personaje.id.toString());
  }

}
