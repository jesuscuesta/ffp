import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../shared/services/personajes.service';
import { Personajes } from '../../shared/model/personajes';

@Component({
  selector: 'fight-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.css']
})
export class FaseComponent implements OnInit {
  public allPersonajes: Personajes[];
  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    this.personajesService
      .getPersonajes()
      .subscribe(data => (this.allPersonajes = data));
  }

  public recibirAtaque(ataqueRecibido): void {
    const personajeRecibeAtaque = this.allPersonajes.findIndex(
      data => data.id != ataqueRecibido
    );
    this.allPersonajes[personajeRecibeAtaque].energia -= 10;
  }
}
