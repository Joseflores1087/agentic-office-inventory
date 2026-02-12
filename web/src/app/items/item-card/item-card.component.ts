import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() item!: Item;
  @Input() isCritical: boolean = false;
  @Output() transactionClick = new EventEmitter<void>();

  onTransactionClick(): void {
    this.transactionClick.emit();
  }
}
