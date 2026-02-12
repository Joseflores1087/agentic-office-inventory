import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemCardComponent,
    TransactionModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemsListComponent
  ]
})
export class ItemsModule { }
