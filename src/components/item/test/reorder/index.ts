import {Component, ChangeDetectorRef} from '@angular/core';
import {ionicBootstrap, reorderArray} from '../../../../../src';


@Component({
  templateUrl: 'main.html'
})
class E2EPage {
  items: any[] = [];
  isReordering: boolean = false;

  constructor(private d: ChangeDetectorRef) {
    let nu = 30;
    for (let i = 0; i < nu; i++) {
      this.items.push(i);
    }
  }

  toggle() {
    this.isReordering = !this.isReordering;
  }

  reorder(indexes: any) {
    this.items = reorderArray(this.items, indexes);
  }
}

ionicBootstrap(E2EPage);
