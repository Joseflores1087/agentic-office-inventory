import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum ItemCategoria {
  HARDWARE = 'HARDWARE',
  PERIFERICOS = 'PERIFERICOS',
  PAPELERIA = 'PAPELERIA',
}

export enum TransactionType {
  ENTRADA = 'ENTRADA',
  SALIDA = 'SALIDA',
}

export interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: ItemCategoria;
  stock_actual: number;
  precio_unitario: number;
  stock_critico: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateTransactionDto {
  tipo: TransactionType;
  cantidad: number;
}

export interface Transaction {
  id: number;
  item_id: number;
  tipo: TransactionType;
  cantidad: number;
  stock_anterior: number;
  stock_nuevo: number;
  realizado_por: string;
  created_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  createTransaction(
    itemId: number,
    dto: CreateTransactionDto
  ): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/${itemId}/transaction`, dto);
  }
}
