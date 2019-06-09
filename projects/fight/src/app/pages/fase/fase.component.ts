import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../shared/services/personajes.service';
import { Personajes } from '../../shared/model/personajes';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  increment,
  decrement,
  reset
} from '../../shared/actions/ataque.actions';

@Component({
  selector: 'fight-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.css']
})
export class FaseComponent implements OnInit {
  public allPersonajes: Personajes[];
  count$: Observable<Personajes[]>;

  constructor(
    private personajesService: PersonajesService,
    private store: Store<{ count: Personajes[] }>
  ) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe(data => {
      this.allPersonajes = data;
      this.count$ = of(data);
    });
  }

  recibirAtaque(ataqueRecibido): void {
    const personajeRecibeAtaque = this.allPersonajes.findIndex(
      data => data.id != ataqueRecibido
    );
    this.allPersonajes[personajeRecibeAtaque].energia -= 10;
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
