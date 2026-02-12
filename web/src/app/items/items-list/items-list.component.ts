import { Component, OnInit, signal, computed } from '@angular/core';
import { ItemsService, Item, CreateTransactionDto } from '../items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  // Signals for reactive state management
  items = signal<Item[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  selectedItem = signal<Item | null>(null);
  showModal = signal<boolean>(false);

  // Computed signal for critical items
  criticalItems = computed(() =>
    this.items().filter(item => item.stock_actual <= item.stock_critico)
  );

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.loading.set(true);
    this.error.set(null);

    this.itemsService.getItems().subscribe({
      next: (items) => {
        this.items.set(items);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error loading items. Please try again.');
        this.loading.set(false);
        console.error('Error loading items:', err);
      }
    });
  }

  openTransactionModal(item: Item): void {
    this.selectedItem.set(item);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.selectedItem.set(null);
    this.showModal.set(false);
  }

  onTransactionSubmit(dto: CreateTransactionDto): void {
    const item = this.selectedItem();
    if (!item) return;

    this.itemsService.createTransaction(item.id, dto).subscribe({
      next: () => {
        this.closeModal();
        this.loadItems(); // Auto-refresh after successful transaction
      },
      error: (err) => {
        const errorMessage = err.error?.message || 'Error processing transaction';
        alert(`Error: ${errorMessage}`);
        console.error('Transaction error:', err);
      }
    });
  }

  isCritical(item: Item): boolean {
    return item.stock_actual <= item.stock_critico;
  }
}
