import {Component} from '@angular/core';
import {Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {DocumentData} from "@angular/fire/compat/firestore";

class Persona {
  constructor(private nome: string, private cognome: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  item$: Observable<DocumentData[]>;
  persone: Persona[] = [];
  nomeInput: string = "Bella";
  cognomeInput: string = "Ciao";

  constructor(private firedb: Firestore) {
    const col = collection(firedb, 'nomi');
    this.item$ = collectionData(col);
    this.item$.subscribe(
      (data) => {
        this.persone = [];
        for (const d of data) {
          this.persone.push(new Persona(d['nome'], d['cognome']));
        }
      }
    );
  }

  addPersona(nome: string, cognome: string) {
    addDoc(collection(this.firedb, "nomi"), {
      nome: nome,
      cognome: cognome
    });
  }

  ngOnInit() {

  }

  onAddPersona() {
    // @ts-ignore
    this.nomeInput = document.getElementById("nome").value;
    // @ts-ignore
    this.cognomeInput = document.getElementById("cognome").value;
    this.addPersona(this.nomeInput, this.cognomeInput);
  }
}
