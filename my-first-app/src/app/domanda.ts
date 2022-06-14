import {Risposta} from "./risposta";

export class Domanda {
  constructor(public quesito: string, public risposte: Risposta[], public tipo: string) {}
}
