import {Component, ElementRef, ViewChild} from '@angular/core';
import {Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {DocumentData} from "@angular/fire/compat/firestore";
import {Domanda} from "./domanda";
import {Quiz} from "./quiz";
import {NgForm} from "@angular/forms";

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

  itemsNomi: Observable<DocumentData[]>;
  itemsDomande: Observable<DocumentData[]>;
  itemsQuiz: Observable<DocumentData[]>;
  persone: Persona[] = [];
  domande: Domanda[] = [];
  quiz: Quiz[] = [];
  nomeInput: string = "";
  cognomeInput: string = "";

  @ViewChild('inputNome') inputNomeForm!: NgForm;

  constructor(private firedb: Firestore) {
    const colNomi = collection(firedb, 'nomi');
    this.itemsNomi = collectionData(colNomi);
    const colDomande = collection(firedb, 'domanda');
    this.itemsDomande = collectionData(colDomande);
    const colQuiz = collection(firedb, 'quiz');
    this.itemsQuiz = collectionData(colQuiz);
    this.itemsNomi.subscribe(
      (data) => {
        this.persone = [];
        for (const d of data) {
          this.persone.push(new Persona(d['nome'], d['cognome']));
        }
      }
    );
    this.itemsDomande.subscribe(
      (data) => {
        this.domande = [];
        for (const d of data) {
          this.domande.push(new Domanda(d['quesito'], d['risposte'], d['tipo']));
        }
        //console.log(this.domande);
      }
    );
    this.itemsQuiz.subscribe(
      (data) => {
        this.quiz = [];
        for (const d of data) {
          this.quiz.push(<Quiz>d);
          //console.log(d);
        }
        console.log(this.quiz);
      }
    );
  }

  addPersona(nomeInput: string, cognomeInput: string) {
    addDoc(collection(this.firedb, "nomi"), {
      nome: nomeInput,
      cognome: cognomeInput
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.inputNomeForm.valid){
      this.addPersona(this.inputNomeForm.value.nome,
        this.inputNomeForm.value.cognome)
    }
  }
}
