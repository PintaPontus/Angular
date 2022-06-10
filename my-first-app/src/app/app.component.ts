import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  items: Observable<Item[]> | undefined;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    // @ts-ignore
    const collection = collection(this.firestore, 'items');
    this.items = collectionData(collection);
    this.items.subscribe(console.log);
  }

}
