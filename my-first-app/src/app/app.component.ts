import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {DocumentData} from "@angular/fire/compat/firestore";

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  item$: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'items');
    this.item$ = collectionData(col);
    this.item$.subscribe(console.log);
  }

  ngOnInit() {

  }

}
