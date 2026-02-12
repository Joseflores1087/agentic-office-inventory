import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemCategoria } from '../items.service';

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

  getCategoryColor(): string {
    const categoria = String(this.item.categoria).toUpperCase();

    if (categoria.includes('HARDWARE')) {
      return 'bg-indigo-100 text-indigo-800 border-indigo-300';
    } else if (categoria.includes('PERIF')) {
      return 'bg-violet-100 text-violet-800 border-violet-300';
    } else if (categoria.includes('PAPEL')) {
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    } else {
      return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  }
}
