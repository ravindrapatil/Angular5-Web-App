import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../interface/Item';

@Injectable()
export class FirestoreItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('Items', ref => ref.orderBy('title', 'asc'));

    // this.items = this.afs.collection('Items').valueChanges();
    this.items = this.afs.collection('Items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems() {
    return this.items;
  }

  addNewItem(singleItem: Item) {
    this.itemsCollection.add(singleItem);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`Items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`Items/${item.id}`);
    this.itemDoc.update(item);
  }

}
