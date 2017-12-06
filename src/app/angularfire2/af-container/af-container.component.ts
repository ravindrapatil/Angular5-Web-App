import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirestoreItemService } from '../../services/firestore-item.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-af-container',
  templateUrl: './af-container.component.html',
  styleUrls: ['./af-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AfContainerComponent implements OnInit {

  items: Item[];
  item: Item = {
    title: '',
    description: ''
  };
  // tslint:disable-next-line:no-inferrable-types
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public itemService: FirestoreItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onSubmit() {
    if (this.item.title !== '' && this.item.description !== '') {
      this.itemService.addNewItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
