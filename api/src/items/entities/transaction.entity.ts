import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Item } from './item.entity';

export enum TransactionType {
  ENTRADA = 'ENTRADA',
  SALIDA = 'SALIDA',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_id: number;

  @ManyToOne(() => Item, { eager: false })
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  tipo: TransactionType;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'int' })
  stock_anterior: number;

  @Column({ type: 'int' })
  stock_nuevo: number;

  @Column({ type: 'varchar', length: 255, default: 'Sistema' })
  realizado_por: string;

  @CreateDateColumn()
  created_at: Date;
}
