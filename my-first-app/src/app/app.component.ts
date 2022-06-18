import {Component, ViewChild} from '@angular/core';
import {Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {DocumentData} from "@angular/fire/compat/firestore";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";

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
  persone: Persona[] = [];
  nomeInput: string = "";
  cognomeInput: string = "";

  @ViewChild('inputNome') inputNomeForm!: NgForm;

  constructor(private firedb: Firestore, private authService: AuthenticationService) {
    const colNomi = collection(firedb, 'nomi');
    this.itemsNomi = collectionData(colNomi);
    this.itemsNomi.subscribe(
      (data) => {
        this.persone = [];
        for (const d of data) {
          this.persone.push(new Persona(d['nome'], d['cognome']));
        }
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

  signup() {
    let emailInput = this.inputNomeForm.value.nome;
    let passwordInput = this.inputNomeForm.value.cognome;
    this.authService.signup(emailInput, passwordInput);
  }

  login(){
    let emailInput = this.inputNomeForm.value.nome;
    let passwordInput = this.inputNomeForm.value.cognome;
    this.authService.login(emailInput, passwordInput);
  }

  logout(){
    this.authService.logout();
  }
}
