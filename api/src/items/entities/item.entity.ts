import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ItemCategoria {
  HARDWARE = 'Hardware',
  PAPELERIA = 'Papelería',
  PERIFERICOS = 'Periféricos',
}

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({
    type: 'enum',
    enum: ItemCategoria,
  })
  categoria: ItemCategoria;

  @Column({ type: 'int' })
  stock_actual: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio_unitario: number;

  @Column({ type: 'int' })
  stock_critico: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
