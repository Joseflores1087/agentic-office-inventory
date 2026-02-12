import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item, CreateTransactionDto, TransactionType } from '../items.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css']
})
export class TransactionModalComponent implements OnInit {
  @Input() item!: Item;
  @Output() close = new EventEmitter<void>();
  @Output() submitTransaction = new EventEmitter<CreateTransactionDto>();

  transactionForm!: FormGroup;
  TransactionType = TransactionType; // Make enum available in template

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      tipo: [TransactionType.ENTRADA, Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const dto: CreateTransactionDto = {
        tipo: this.transactionForm.value.tipo,
        cantidad: this.transactionForm.value.cantidad
      };
      this.submitTransaction.emit(dto);
    }
  }

  onBackdropClick(event: MouseEvent): void {
    // Close modal when clicking on backdrop (not the modal content)
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
